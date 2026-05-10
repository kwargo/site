const fs = require("fs");
const path = require("path");

const RAW_DIR = path.join(__dirname, "data", "raw");
const OUTPUT_PATH = path.join(__dirname, "data", "languages.json");
const PHONOLOGY_OUTPUT_PATH = path.join(__dirname, "data", "phonology.json");

const FEATURE_MAP = {
  "81A": "wordOrder",
  "22A": "morphType",
  "49A": "cases",
  "31A": "gender",
  "13A": "tones",
  "72A": "evidentiality",
};

const PHONOLOGY_FEATURE_MAP = {
  "1A": "consonantInventory",
  "2A": "vowelInventory",
  "13A": "tones",
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...dataRows] = rows;
  return dataRows
    .filter((dataRow) => dataRow.some((value) => value !== ""))
    .map((dataRow) => Object.fromEntries(header.map((key, index) => [key, dataRow[index] ?? ""])));
}

function readCsv(fileName) {
  return parseCsv(fs.readFileSync(path.join(RAW_DIR, fileName), "utf8"));
}

function toNumber(value) {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function firstPresent(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== "") ?? null;
}

const languages = readCsv("languages.csv");
const values = readCsv("values.csv");
const parameters = readCsv("parameters.csv");
const codes = readCsv("codes.csv");

const parameterNames = new Map(parameters.map((parameter) => [parameter.ID, parameter.Name]));
const codeNames = new Map(codes.map((code) => [code.ID, code.Name]));
const languageById = new Map(languages.map((language) => [language.ID, language]));
const featuresByLanguage = new Map();
const phonologyByLanguage = new Map();
const wantedFeatureIds = new Set(Object.keys(FEATURE_MAP));
const wantedPhonologyFeatureIds = new Set(Object.keys(PHONOLOGY_FEATURE_MAP));

for (const value of values) {
  const codeName = codeNames.get(value.Code_ID);

  if (wantedFeatureIds.has(value.Parameter_ID)) {
    const languageFeatures = featuresByLanguage.get(value.Language_ID) ?? {};
    const fieldName = FEATURE_MAP[value.Parameter_ID];

    languageFeatures[fieldName] = firstPresent(codeName, value.Value);
    featuresByLanguage.set(value.Language_ID, languageFeatures);
  }

  if (wantedPhonologyFeatureIds.has(value.Parameter_ID)) {
    const languageFeatures = phonologyByLanguage.get(value.Language_ID) ?? {};
    const fieldName = PHONOLOGY_FEATURE_MAP[value.Parameter_ID];

    languageFeatures[fieldName] = firstPresent(codeName, value.Value);
    phonologyByLanguage.set(value.Language_ID, languageFeatures);
  }
}

const output = [];
const phonologyOutput = [];

for (const language of languages) {
  const featureValues = featuresByLanguage.get(language.ID) ?? {};
  const hasAnyFeature = Object.values(FEATURE_MAP).some((fieldName) => featureValues[fieldName]);

  if (!hasAnyFeature) continue;

  output.push({
    name: language.Name,
    family: language.Family || null,
    macroarea: language.Macroarea || null,
    latitude: toNumber(language.Latitude),
    longitude: toNumber(language.Longitude),
    wordOrder: featureValues.wordOrder ?? null,
    morphType: featureValues.morphType ?? null,
    cases: featureValues.cases ?? null,
    gender: featureValues.gender ?? null,
    tones: featureValues.tones ?? null,
    evidentiality: featureValues.evidentiality ?? null,
  });

  const phonologyValues = phonologyByLanguage.get(language.ID) ?? {};
  phonologyOutput.push({
    name: language.Name,
    family: language.Family || null,
    macroarea: language.Macroarea || null,
    consonantInventory: phonologyValues.consonantInventory ?? null,
    vowelInventory: phonologyValues.vowelInventory ?? null,
    tones: phonologyValues.tones ?? null,
    comment: "WALS 1A = Consonant Inventories; 2A = Vowel Quality Inventories; 13A = Tone",
  });
}

output.sort((a, b) => a.name.localeCompare(b.name));
phonologyOutput.sort((a, b) => a.name.localeCompare(b.name));

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
fs.writeFileSync(PHONOLOGY_OUTPUT_PATH, `${JSON.stringify(phonologyOutput, null, 2)}\n`, "utf8");

console.log(`Wrote ${output.length} languages to ${path.relative(__dirname, OUTPUT_PATH)}`);
console.log(`Wrote ${phonologyOutput.length} languages to ${path.relative(__dirname, PHONOLOGY_OUTPUT_PATH)}`);
console.log(
  `Features: ${Object.entries(FEATURE_MAP)
    .map(([featureId, fieldName]) => `${featureId} (${parameterNames.get(featureId) ?? "unknown"}) -> ${fieldName}`)
    .join("; ")}`
);
console.log(
  `Phonology features: ${Object.entries(PHONOLOGY_FEATURE_MAP)
    .map(([featureId, fieldName]) => `${featureId} (${parameterNames.get(featureId) ?? "unknown"}) -> ${fieldName}`)
    .join("; ")}`
);
