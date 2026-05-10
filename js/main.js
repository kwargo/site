const chartLanguages = [
  { name: "Английский", family: "Индоевропейская", morphType: "флективный", wordOrder: "SVO", tones: "нет", speakers: 1493 },
  { name: "Испанский", family: "Индоевропейская", morphType: "флективный", wordOrder: "SVO", tones: "нет", speakers: 561 },
  { name: "Французский", family: "Индоевропейская", morphType: "флективный", wordOrder: "SVO", tones: "нет", speakers: 334 },
  { name: "Немецкий", family: "Индоевропейская", morphType: "флективный", wordOrder: "свободный", tones: "нет", speakers: 133 },
  { name: "Русский", family: "Индоевропейская", morphType: "флективный", wordOrder: "SVO", tones: "нет", speakers: 210 },
  { name: "Мандаринский китайский", family: "Сино-тибетская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 1183 },
  { name: "Персидский", family: "Индоевропейская", morphType: "флективный", wordOrder: "SOV", tones: "нет", speakers: 79 },
  { name: "Индонезийский", family: "Австронезийская", morphType: "изолирующий", wordOrder: "SVO", tones: "нет", speakers: 255 },
  { name: "Турецкий", family: "Тюркская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 94 },
  { name: "Вьетнамский", family: "Австроазиатская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 97 },
  { name: "Тайский", family: "Тай-кадайская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 61 },
  { name: "Суахили", family: "Атлантико-конголезская", morphType: "агглютинативный", wordOrder: "SVO", tones: "нет", speakers: 95 },
  { name: "Хауса", family: "Афразийская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 94 },
  { name: "Тагальский", family: "Австронезийская", morphType: "агглютинативный", wordOrder: "VSO", tones: "нет", speakers: 83 },
  { name: "Каннада", family: "Дравидийская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 59 },
  { name: "Бирманский", family: "Сино-тибетская", morphType: "изолирующий", wordOrder: "SOV", tones: "да", speakers: 43 },
  { name: "Новогреческий", family: "Индоевропейская", morphType: "флективный", wordOrder: "свободный", tones: "нет", speakers: 13.5 },
  { name: "Финский", family: "Уральская", morphType: "агглютинативный", wordOrder: "SVO", tones: "нет", speakers: 5.8 },
  { name: "Венгерский", family: "Уральская", morphType: "агглютинативный", wordOrder: "свободный", tones: "нет", speakers: 13 },
  { name: "Баскский", family: "изолят", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 0.75 },
  { name: "Грузинский", family: "Картвельская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 4 },
  { name: "Египетский арабский", family: "Афразийская", morphType: "флективный", wordOrder: "SVO", tones: "нет", speakers: 118 },
  { name: "Йоруба", family: "Атлантико-конголезская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 47 },
  { name: "Зулу", family: "Атлантико-конголезская", morphType: "агглютинативный", wordOrder: "SVO", tones: "да", speakers: 12 },
  { name: "Малагасийский", family: "Австронезийская", morphType: "агглютинативный", wordOrder: "VOS", tones: "нет", speakers: 25 },
  { name: "Гуарани", family: "Тупийская", morphType: "агглютинативный", wordOrder: "SVO", tones: "нет", speakers: 6.5 },
  { name: "Абхазский", family: "Северо-западнокавказская", morphType: "полисинтетический", wordOrder: "SOV", tones: "нет", speakers: 0.19 },
  { name: "Лезгинский", family: "Нахско-дагестанская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 0.8 },
  { name: "Западногренландский", family: "Эскимосско-алеутская", morphType: "полисинтетический", wordOrder: "SOV", tones: "нет", speakers: 0.057 },
  { name: "Кетский", family: "Енисейская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 0.0002 },
  { name: "Хмонг Нджуа", family: "Хмонг-мьенская", morphType: "изолирующий", wordOrder: "SVO", tones: "да", speakers: 1.5 },
  { name: "Халха-монгольский", family: "Монгольская", morphType: "агглютинативный", wordOrder: "SOV", tones: "нет", speakers: 2.9 },
  { name: "Кхаси", family: "Австроазиатская", morphType: "изолирующий", wordOrder: "SVO", tones: "нет", speakers: 1.6 },
  { name: "Мапудунгун", family: "Арауканская", morphType: "полисинтетический", wordOrder: "SVO", tones: "нет", speakers: 0.26 }
];

const families = [
  { name: "Атлантико-конголезская", region: "Африка", languages: 1410, speakers: 700, examples: "суахили, йоруба, зулу" },
  { name: "Австронезийская", region: "Океания, Юго-Восточная Азия, Мадагаскар", languages: 1272, speakers: 386, examples: "индонезийский, тагальский, малагасийский" },
  { name: "Индоевропейская", region: "Европа, Южная и Западная Азия, диаспоры", languages: 585, speakers: 3200, examples: "английский, русский, испанский" },
  { name: "Сино-тибетская", region: "Восточная, Южная и Юго-Восточная Азия", languages: 506, speakers: 1400, examples: "мандаринский, бирманский, тибетский" },
  { name: "Афразийская", region: "Северная Африка, Сахель, Ближний Восток", languages: 382, speakers: 500, examples: "арабский, хауса, иврит" },
  { name: "Трансновогвинейская", region: "Новая Гвинея", languages: 317, speakers: 4, examples: "энга, дани, кева" },
  { name: "Пама-ньюнганская", region: "Австралия", languages: 250, speakers: 0.05, examples: "питянтятяра, варлпири" },
  { name: "Ото-мангская", region: "Мезоамерика", languages: 181, speakers: 2, examples: "сапотекские, миштекские языки" },
  { name: "Австроазиатская", region: "Южная и Юго-Восточная Азия", languages: 158, speakers: 120, examples: "вьетнамский, кхаси, кхмерский" },
  { name: "Тай-кадайская", region: "Юго-Восточная Азия, Южный Китай", languages: 96, speakers: 100, examples: "тайский, лаосский, чжуанский" },
  { name: "Дравидийская", region: "Южная Азия", languages: 82, speakers: 250, examples: "тамильский, телугу, каннада" },
  { name: "Тюркская", region: "Евразия", languages: 43, speakers: 200, examples: "турецкий, казахский, узбекский" },
  { name: "Уральская", region: "Северная и Центральная Евразия", languages: 49, speakers: 25, examples: "финский, венгерский, ненецкий" },
  { name: "Хмонг-мьенская", region: "Южный Китай, Юго-Восточная Азия", languages: 42, speakers: 10, examples: "хмонг, мьен" }
];

// Swiss palette: near-black, hairline rule, and one red accent.
const topFamilyPalette = [
  "#d92121",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a"
];

const otherFamilyColor = "#d4d4d4";

// Categorical charts stay inside the four-token Swiss palette.
const chartPalette = [
  "#0a0a0a",
  "#d92121",
  "#d4d4d4",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a",
  "#d4d4d4",
  "#0a0a0a"
];

// WALS field values come from CLDF in English. We keep them untouched in the
// JSON (so that rebuilds stay idempotent and raw CSV stays the source of
// truth) and translate at render time only.
const WALS_TRANSLATIONS = {
  macroarea: {
    "Africa": "Африка",
    "Eurasia": "Евразия",
    "Australia": "Австралия",
    "Papunesia": "Папунезия",
    "North America": "Северная Америка",
    "South America": "Южная Америка"
  },
  wordOrder: {
    "SOV": "SOV",
    "SVO": "SVO",
    "VSO": "VSO",
    "VOS": "VOS",
    "OVS": "OVS",
    "OSV": "OSV",
    "No dominant order": "без доминирующего порядка"
  },
  morphType: {
    "0-1 category per word": "0–1 категория на слово",
    "2-3 categories per word": "2–3 категории на слово",
    "4-5 categories per word": "4–5 категорий на слово",
    "6-7 categories per word": "6–7 категорий на слово",
    "8-9 categories per word": "8–9 категорий на слово",
    "10-11 categories per word": "10–11 категорий на слово",
    "12-13 categories per word": "12–13 категорий на слово"
  },
  cases: {
    "No morphological case-marking": "без морфологических падежей",
    "Exclusively borderline case-marking": "только пограничные показатели падежа",
    "2 cases": "2 падежа",
    "3 cases": "3 падежа",
    "4 cases": "4 падежа",
    "5 cases": "5 падежей",
    "6-7 cases": "6–7 падежей",
    "8-9 cases": "8–9 падежей",
    "10 or more cases": "10 или более падежей"
  },
  gender: {
    "No gender": "нет рода",
    "Sex-based": "по полу",
    "Non-sex-based": "не по полу"
  },
  tones: {
    "No tones": "нет тонов",
    "Simple tone system": "простая тональная система",
    "Complex tone system": "сложная тональная система"
  },
  evidentiality: {
    "Neither type of system": "нет грамматической эвиденциальности",
    "Minimal system": "минимальная система",
    "Maximal system": "развитая система",
    "Both types of system": "оба типа систем"
  },
  consonantInventory: {
    "Small": "малый",
    "Moderately small": "умеренно малый",
    "Average": "средний",
    "Moderately large": "умеренно крупный",
    "Large": "крупный"
  },
  vowelInventory: {
    "Small (2-4)": "малый (2–4)",
    "Average (5-6)": "средний (5–6)",
    "Large (7-14)": "крупный (7–14)"
  },
  // Only widely recognised families have Russian names; the rest (200+ micro
  // groupings and isolates) keep their Glottolog labels and are footnoted.
  family: {
    "Indo-European": "Индоевропейская",
    "Sino-Tibetan": "Сино-тибетская",
    "Austronesian": "Австронезийская",
    "Afro-Asiatic": "Афразийская",
    "Atlantic-Congo": "Атлантико-конголезская",
    "Niger-Congo": "Нигеро-конголезская",
    "Austro-Asiatic": "Австроазиатская",
    "Dravidian": "Дравидийская",
    "Tai-Kadai": "Тай-кадайская",
    "Turkic": "Тюркская",
    "Uralic": "Уральская",
    "Mongolic": "Монгольская",
    "Tungusic": "Тунгусо-маньчжурская",
    "Japanese": "Японская",
    "Korean": "Корейская",
    "Altaic": "Алтайская",
    "Hmong-Mien": "Хмонг-мьенская",
    "Trans-New Guinea": "Трансновогвинейская",
    "Pama-Nyungan": "Пама-ньюнганская",
    "Oto-Manguean": "Ото-мангская",
    "Mayan": "Майя",
    "Eskimo-Aleut": "Эскимосско-алеутская",
    "Chukotko-Kamchatkan": "Чукотско-камчатская",
    "Kartvelian": "Картвельская",
    "Nakh-Daghestanian": "Нахско-дагестанская",
    "Northwest Caucasian": "Северо-западнокавказская",
    "Yeniseian": "Енисейская",
    "Tupian": "Тупийская",
    "Araucanian": "Арауканская",
    "Arawakan": "Аравакская",
    "Cariban": "Карибская",
    "Quechuan": "Кечуанская",
    "Aymaran": "Аймаранская",
    "Basque": "Баскская"
  }
};

function translate(field, value) {
  if (value === undefined || value === null || value === "") return value;
  const dict = WALS_TRANSLATIONS[field];
  if (!dict) return value;
  return Object.prototype.hasOwnProperty.call(dict, value) ? dict[value] : value;
}

function formatNumber(value) {
  if (value === undefined || value === null || value === "") return "—";
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value);
  if (number < 0.01) return String(number).replace(".", ",");
  return number.toLocaleString("ru-RU", { maximumFractionDigits: 3 });
}

function displayValue(value) {
  return value === undefined || value === null || value === "" ? "—" : String(value);
}

function escapeHtml(value) {
  return displayValue(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function loadWalsLanguages() {
  let response;

  try {
    response = await fetch("data/languages.json");
  } catch (error) {
    throw new Error(`Ошибка сети при загрузке data/languages.json: ${error.message}`);
  }

  if (!response.ok) {
    throw new Error(`Не удалось загрузить data/languages.json: HTTP ${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  if (!text.trim()) {
    throw new Error("Файл data/languages.json пустой.");
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    throw new Error(`Файл data/languages.json содержит некорректный JSON: ${error.message}`);
  }

  if (!Array.isArray(data)) {
    throw new Error("Файл data/languages.json должен содержать массив языков.");
  }

  if (data.length === 0) {
    throw new Error("Файл data/languages.json не содержит языков.");
  }

  console.log("Loaded WALS languages:", data.length);
  return data;
}

async function loadPhonologyLanguages() {
  let response;

  try {
    response = await fetch("data/phonology.json");
  } catch (error) {
    throw new Error(`Ошибка сети при загрузке data/phonology.json: ${error.message}`);
  }

  if (!response.ok) {
    throw new Error(`Не удалось загрузить data/phonology.json: HTTP ${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  if (!text.trim()) {
    throw new Error("Файл data/phonology.json пустой.");
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    throw new Error(`Файл data/phonology.json содержит некорректный JSON: ${error.message}`);
  }

  if (!Array.isArray(data)) {
    throw new Error("Файл data/phonology.json должен содержать массив языков.");
  }

  if (data.length === 0) {
    throw new Error("Файл data/phonology.json не содержит языков.");
  }

  console.log("Loaded WALS phonology languages:", data.length);
  return data;
}

// Tabulator formatter that swaps the raw English value for its Russian label
// if one exists in WALS_TRANSLATIONS. The stored field value stays in English
// so that setFilter("=") comparisons keep working against the raw data.
function translatedCellFormatter(cell) {
  const field = cell.getField();
  const raw = cell.getValue();
  const translated = translate(field, raw);
  return escapeHtml(translated ?? raw);
}

function getTypologyColumns() {
  return [
    { title: "Язык", field: "name", headerFilter: false, widthGrow: 2, minWidth: 140 },
    { title: "Семья", field: "family", widthGrow: 2, minWidth: 140, formatter: translatedCellFormatter },
    { title: "Ареал", field: "macroarea", widthGrow: 1, minWidth: 110, formatter: translatedCellFormatter },
    { title: "Порядок слов", field: "wordOrder", widthGrow: 1, minWidth: 140, formatter: translatedCellFormatter },
    { title: "Морф. тип", field: "morphType", widthGrow: 2, minWidth: 180, formatter: translatedCellFormatter },
    { title: "Падежи", field: "cases", widthGrow: 2, minWidth: 180, formatter: translatedCellFormatter },
    { title: "Род", field: "gender", widthGrow: 2, minWidth: 160, formatter: translatedCellFormatter },
    { title: "Тоны", field: "tones", widthGrow: 2, minWidth: 180, formatter: translatedCellFormatter },
    { title: "Эвиденциальность", field: "evidentiality", widthGrow: 2, minWidth: 200, formatter: translatedCellFormatter }
  ];
}

function getPhonologyColumns() {
  return [
    { title: "Язык", field: "name", widthGrow: 2, minWidth: 140 },
    { title: "Семья", field: "family", widthGrow: 2, minWidth: 140, formatter: translatedCellFormatter },
    { title: "Ареал", field: "macroarea", widthGrow: 1, minWidth: 110, formatter: translatedCellFormatter },
    { title: "Согласный инвентарь", field: "consonantInventory", widthGrow: 2, minWidth: 180, formatter: translatedCellFormatter },
    { title: "Гласный инвентарь", field: "vowelInventory", widthGrow: 2, minWidth: 170, formatter: translatedCellFormatter },
    { title: "Тоны", field: "tones", widthGrow: 2, minWidth: 180, formatter: translatedCellFormatter }
  ];
}

function createTabulator(selector, rows, columns, options = {}) {
  if (!window.Tabulator) {
    throw new Error("Tabulator не загружен. Проверьте подключение tabulator-tables в HTML.");
  }
  return new Tabulator(selector, {
    data: rows,
    columns,
    layout: "fitColumns",
    pagination: true,
    paginationSize: 50,
    paginationSizeSelector: [25, 50, 100, 200],
    paginationCounter: "rows",
    initialSort: [{ column: "name", dir: "asc" }],
    placeholder: "Совпадений не найдено",
    locale: "ru",
    langs: {
      ru: {
        pagination: {
          first: "Первая",
          first_title: "Первая страница",
          last: "Последняя",
          last_title: "Последняя страница",
          prev: "Предыдущая",
          prev_title: "Предыдущая страница",
          next: "Следующая",
          next_title: "Следующая страница",
          all: "Все",
          counter: { showing: "Показаны", of: "из", rows: "записей" },
          page_size: "Записей на странице",
          page_title: "Показать страницу"
        }
      }
    },
    ...options
  });
}

function setupTableControls(filtersSelector, table, rows, columns) {
  const filters = document.querySelector(filtersSelector);
  if (!filters) return;

  const selects = [...filters.querySelectorAll("select[data-column]")];
  const searchInput = filters.querySelector('input[data-role="search"]');
  const searchableFields = columns.map((column) => column.field).filter(Boolean);
  const active = {};
  let searchQuery = "";

  const matchesRow = (data) => {
    for (const [field, value] of Object.entries(active)) {
      if (value && data[field] !== value) return false;
    }
    if (!searchQuery) return true;
    return searchableFields.some((field) => {
      const raw = data[field];
      if (raw === undefined || raw === null) return false;
      const translated = translate(field, raw);
      // Search in both the raw English value and its Russian label so users
      // can type either "SVO"/"russian" or "без доминирующего"/"русский".
      return (
        String(raw).toLocaleLowerCase("ru").includes(searchQuery) ||
        (translated && translated !== raw &&
          String(translated).toLocaleLowerCase("ru").includes(searchQuery))
      );
    });
  };

  const applyFilters = () => {
    const hasAny = searchQuery || Object.values(active).some(Boolean);
    if (!hasAny) {
      table.clearFilter(true);
      return;
    }
    table.setFilter(matchesRow);
  };

  selects.forEach((select) => {
    const columnIndex = Number(select.dataset.column);
    const column = columns[columnIndex];
    const fieldName = column?.field;
    if (!fieldName) return;

    select.innerHTML = '<option value="">Все</option>';
    const values = [...new Set(rows.map((row) => row[fieldName]))]
      .filter((value) => value && value !== "—")
      // Sort by the translated label so the dropdown reads naturally in Russian.
      .sort((a, b) => String(translate(fieldName, a))
        .localeCompare(String(translate(fieldName, b)), "ru"));

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;                          // raw English, for setFilter("=")
      option.textContent = translate(fieldName, value); // displayed Russian label
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      active[fieldName] = select.value;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.trim().toLocaleLowerCase("ru");
      applyFilters();
    });
  }
}

function setupNav() {
  const button = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!button || !links) return;
  button.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupChartDefaults() {
  if (!window.Chart) return;
  Chart.defaults.color = "#0a0a0a";
  Chart.defaults.borderColor = "#d4d4d4";
  Chart.defaults.font.family = "Inter, IBM Plex Sans, Helvetica Neue, Arial, sans-serif";
  Chart.defaults.font.weight = "400";
}

function setupImageLightbox() {
  const images = [...document.querySelectorAll(".hero-media img, .image-panel img, .image-strip img")];
  if (images.length === 0) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="image-lightbox-panel" role="dialog" aria-modal="true" aria-label="Просмотр изображения">
      <button class="image-lightbox-close" type="button" aria-label="Закрыть">×</button>
      <img alt="">
      <p class="image-lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const panel = lightbox.querySelector(".image-lightbox-panel");
  const preview = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".image-lightbox-caption");
  const closeButton = lightbox.querySelector(".image-lightbox-close");

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openLightbox = (image) => {
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt || "";
    const figureCaption = image.closest("figure")?.querySelector("figcaption")?.textContent?.trim();
    caption.textContent = figureCaption || image.alt || "";
    caption.hidden = !caption.textContent;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  };

  images.forEach((image) => {
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Открыть изображение");
    image.addEventListener("click", () => openLightbox(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  panel.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}

async function fillTypologyTable() {
  const tableElement = document.querySelector("#typologyTable");
  const subtitle = document.querySelector(".page-hero .lead");
  if (!tableElement) return;

  try {
    const walsLanguages = await loadWalsLanguages();
    const rows = walsLanguages.map((language) => ({
      name: displayValue(language.name),
      family: displayValue(language.family),
      macroarea: displayValue(language.macroarea),
      wordOrder: displayValue(language.wordOrder),
      morphType: displayValue(language.morphType),
      cases: displayValue(language.cases),
      gender: displayValue(language.gender),
      tones: displayValue(language.tones),
      evidentiality: displayValue(language.evidentiality)
    }));
    const typologyColumns = getTypologyColumns();

    if (subtitle) {
      subtitle.textContent = `Загружено ${rows.length.toLocaleString("ru-RU")} языков из WALS.`;
    }

    const table = createTabulator("#typologyTable", rows, typologyColumns);
    table.on("tableBuilt", () => {
      setupTableControls("#typologyFilters", table, rows, typologyColumns);
    });
  } catch (error) {
    if (subtitle) {
      subtitle.textContent = `Ошибка загрузки данных WALS: ${error.message}`;
    }
    console.error("WALS loading failed:", error);
  }
}

function fillFamiliesTable() {
  const table = document.querySelector("#familiesTable tbody");
  if (!table) return;
  table.innerHTML = families.map((family) => `
    <tr>
      <td>${family.name}</td>
      <td>${family.region}</td>
      <td>${family.languages}</td>
      <td>${formatNumber(family.speakers)}</td>
      <td>${family.examples}</td>
    </tr>
  `).join("");
}

async function fillPhonologyTable() {
  const tableElement = document.querySelector("#phonologyTable");
  const subtitle = document.querySelector(".page-hero .lead");
  if (!tableElement) return;

  try {
    const phonologyLanguages = await loadPhonologyLanguages();
    const rows = phonologyLanguages.map((language) => ({
      name: displayValue(language.name),
      family: displayValue(language.family),
      macroarea: displayValue(language.macroarea),
      consonantInventory: displayValue(language.consonantInventory),
      vowelInventory: displayValue(language.vowelInventory),
      tones: displayValue(language.tones)
    }));
    const phonologyColumns = getPhonologyColumns();

    if (subtitle) {
      subtitle.textContent = `Загружено ${rows.length.toLocaleString("ru-RU")} языков из WALS; доступны признаки 1A, 2A и 13A.`;
    }

    const table = createTabulator("#phonologyTable", rows, phonologyColumns);
    table.on("tableBuilt", () => {
      setupTableControls("#phonologyFilters", table, rows, phonologyColumns);
    });
  } catch (error) {
    if (subtitle) {
      subtitle.textContent = `Ошибка загрузки фонологических данных WALS: ${error.message}`;
    }
    console.error("WALS phonology loading failed:", error);
  }
}

function getTopFamilyColorMap(mappedLanguages) {
  const counts = mappedLanguages.reduce((acc, language) => {
    const family = displayValue(language.family);
    acc.set(family, (acc.get(family) || 0) + 1);
    return acc;
  }, new Map());

  const topFamilies = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"))
    .slice(0, 10)
    .map(([family]) => family);

  return new Map(topFamilies.map((family, index) => [family, topFamilyPalette[index]]));
}

function countFilledByField(rows, fieldName) {
  return rows.filter((row) => row[fieldName] !== undefined && row[fieldName] !== null && row[fieldName] !== "").length;
}

function countByField(rows, fieldName) {
  return rows.reduce((acc, row) => {
    const value = displayValue(row[fieldName]);
    if (value === "—") return acc;
    acc.set(value, (acc.get(value) || 0) + 1);
    return acc;
  }, new Map());
}

async function initMap() {
  const target = document.querySelector("#languageMap");
  if (!target || !window.L) return;

  try {
    const map = L.map(target, { scrollWheelZoom: true }).setView([18, 20], 2);
    map.attributionControl.setPrefix(false);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 6,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const walsLanguages = await loadWalsLanguages();
    const mappedLanguages = walsLanguages.filter((language) => {
      const latitude = Number(language.latitude);
      const longitude = Number(language.longitude);
      return Number.isFinite(latitude) && Number.isFinite(longitude);
    });
    console.log("Map WALS records loaded:", walsLanguages.length);
    console.log("Map marker candidates:", mappedLanguages.length);

    if (mappedLanguages.length === 0) {
      throw new Error("В data/languages.json нет языков с валидными latitude/longitude.");
    }

    const familyColorMap = getTopFamilyColorMap(mappedLanguages);
    let markerCount = 0;

    mappedLanguages.forEach((language) => {
      const family = displayValue(language.family);
      const color = familyColorMap.get(family) || otherFamilyColor;
      const popupRows = [
        `<strong>${escapeHtml(language.name)}</strong>`,
        `Семья: ${escapeHtml(translate("family", family))}`,
        `Ареал: ${escapeHtml(translate("macroarea", language.macroarea))}`,
        `Порядок слов: ${escapeHtml(translate("wordOrder", language.wordOrder))}`
      ];

      if (language.speakers !== undefined && language.speakers !== null && language.speakers !== "") {
        popupRows.push(`Носителей: ${escapeHtml(formatNumber(language.speakers))}`);
      }

      const marker = L.circleMarker([Number(language.latitude), Number(language.longitude)], {
        radius: 5,
        color: "#ffffff",
        weight: 1,
        fillColor: color,
        fillOpacity: 0.9
      })
        .bindPopup(popupRows.join("<br>"))
        .addTo(map);
      marker.bringToFront();
      markerCount += 1;
    });
    map.invalidateSize();
    console.log(`Added ${markerCount} markers`);

    const legend = document.querySelector("#mapLegend");
    if (!legend) return;
    const legendItems = [...familyColorMap.entries()].map(([family, color]) => ({ family, color }));
    legendItems.push({ family: "Другие семьи", color: otherFamilyColor });
    legend.innerHTML = legendItems.map((item) => `
      <div class="legend-item">
        <span class="legend-swatch" style="background:${item.color}"></span>
        <span>${escapeHtml(translate("family", item.family))}</span>
      </div>
    `).join("");
  } catch (error) {
    const legend = document.querySelector("#mapLegend");
    if (legend) {
      legend.textContent = "Не удалось загрузить data/languages.json.";
    }
    showMapError(error.message);
    console.error("Map loading failed:", error);
  }
}

function showMapError(message) {
  const layout = document.querySelector(".map-layout");
  if (!layout) return;
  const section = layout.closest(".section") || layout.parentElement;
  if (!section) return;

  let notice = section.querySelector(".map-error");
  if (!notice) {
    notice = document.createElement("div");
    notice.className = "notice is-error map-error";
    notice.setAttribute("role", "alert");
    section.insertBefore(notice, layout);
  }
  notice.innerHTML = `<strong>Не удалось загрузить карту.</strong> ${escapeHtml(message)}`;
}

function initTopLanguagesChart() {
  const canvas = document.querySelector("#topLanguagesChart");
  if (!canvas || !window.Chart) return;
  const top = [...chartLanguages].sort((a, b) => b.speakers - a.speakers).slice(0, 15).reverse();
  // Colour bars with the shared journal palette so languages are visually
  // distinct without breaking the muted DESIGN.md aesthetic.
  const barColors = top.map((_, index) => chartPalette[index % chartPalette.length]);
  new Chart(canvas, {
    type: "bar",
    data: {
      labels: top.map((language) => language.name),
      datasets: [{
        label: "Носителей, млн",
        data: top.map((language) => language.speakers),
        backgroundColor: barColors,
        borderColor: barColors,
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${formatNumber(context.raw)} млн`
          }
        }
      },
      scales: {
        x: { title: { display: true, text: "млн носителей" } }
      }
    }
  });
}

async function initStats() {
  const summary = document.querySelector("#summaryStats");
  const morphologyCanvas = document.querySelector("#morphologyChart");
  const wordOrderCanvas = document.querySelector("#wordOrderChart");
  const subtitle = document.querySelector(".page-hero .lead");
  if (!summary && !morphologyCanvas && !wordOrderCanvas) return;

  let walsLanguages;
  try {
    walsLanguages = await loadWalsLanguages();
  } catch (error) {
    if (subtitle) {
      subtitle.textContent = `Ошибка загрузки статистики WALS: ${error.message}`;
    }
    if (summary) {
      summary.innerHTML = `<article class="stat-card"><strong>—</strong><span>Не удалось загрузить data/languages.json</span></article>`;
    }
    console.error("WALS stats loading failed:", error);
    return;
  }

  const uniqueFamilies = new Set(walsLanguages.map((language) => language.family).filter(Boolean)).size;
  const wordOrderCount = countFilledByField(walsLanguages, "wordOrder");
  const morphTypeCount = countFilledByField(walsLanguages, "morphType");
  const tonal = walsLanguages.filter((language) => language.tones && language.tones !== "No tones").length;

  if (subtitle) {
    subtitle.textContent = `Статистика построена по ${walsLanguages.length.toLocaleString("ru-RU")} языкам из WALS; графики показывают только языки с заполненным соответствующим признаком.`;
  }

  if (summary) {
    summary.innerHTML = `
      <article class="stat-card"><strong>${walsLanguages.length.toLocaleString("ru-RU")}</strong><span>языков в локальной WALS-выборке</span></article>
      <article class="stat-card"><strong>${uniqueFamilies.toLocaleString("ru-RU")}</strong><span>семьи и изоляты</span></article>
      <article class="stat-card"><strong>${wordOrderCount.toLocaleString("ru-RU")}</strong><span>из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют WALS 81A</span></article>
      <article class="stat-card"><strong>${morphTypeCount.toLocaleString("ru-RU")}</strong><span>из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют WALS 22A</span></article>
      <article class="stat-card"><strong>${tonal.toLocaleString("ru-RU")}</strong><span>языков с тонами по WALS 13A</span></article>
    `;
  }

  if (morphologyCanvas && window.Chart) {
    const counts = [...countByField(walsLanguages, "morphType").entries()]
      .sort((a, b) => b[1] - a[1]);
    new Chart(morphologyCanvas, {
      type: "bar",
      data: {
        labels: counts.map(([label]) => translate("morphType", label)),
        datasets: [{
          label: `WALS 22A: ${morphTypeCount.toLocaleString("ru-RU")} из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют данные`,
          data: counts.map(([, count]) => count),
          backgroundColor: chartPalette,
          borderWidth: 0
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw.toLocaleString("ru-RU")}`
            }
          }
        },
        scales: {
          x: { beginAtZero: true, ticks: { precision: 0 } }
        }
      }
    });
  }

  if (wordOrderCanvas && window.Chart) {
    const wordOrderCounts = countByField(walsLanguages, "wordOrder");
    const wordOrderStats = [
      { key: "SOV" },
      { key: "SVO" },
      { key: "VSO" },
      { key: "VOS" },
      { key: "OVS" },
      { key: "OSV" },
      { key: "No dominant order" }
    ].map((item) => ({
      label: translate("wordOrder", item.key),
      count: wordOrderCounts.get(item.key) || 0
    }));

    new Chart(wordOrderCanvas, {
      type: "bar",
      data: {
        labels: wordOrderStats.map((item) => item.label),
        datasets: [{
          label: `WALS 81A: ${wordOrderCount.toLocaleString("ru-RU")} из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют данные`,
          data: wordOrderStats.map((item) => item.count),
          backgroundColor: wordOrderStats.map((_, index) => chartPalette[index % chartPalette.length]),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } }
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupChartDefaults();
  setupImageLightbox();
  fillTypologyTable();
  fillFamiliesTable();
  fillPhonologyTable();
  initMap();
  initTopLanguagesChart();
  initStats();
});
