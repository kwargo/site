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

const phonologyRows = [
  ["Мандаринский китайский", "Сино-тибетская", "средний", "средний", "сложная тональная система", "WALS: 1A, 2A, 13A"],
  ["Английский", "Индоевропейская", "средний", "крупный", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Русский", "Индоевропейская", "умеренно крупный", "средний", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Турецкий", "Тюркская", "средний", "крупный", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Вьетнамский", "Австроазиатская", "средний", "крупный", "сложная тональная система", "WALS: 1A, 2A, 13A"],
  ["Хауса", "Афразийская", "умеренно крупный", "средний", "простая тональная система", "WALS: 1A, 2A, 13A"],
  ["Тагальский", "Австронезийская", "умеренно малый", "средний", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Бирманский", "Сино-тибетская", "умеренно крупный", "крупный", "сложная тональная система", "WALS: 1A, 2A, 13A"],
  ["Абхазский", "Северо-западнокавказская", "крупный", "малый", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Лезгинский", "Нахско-дагестанская", "крупный", "средний", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Финский", "Уральская", "умеренно малый", "крупный", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Зулу", "Атлантико-конголезская", "умеренно крупный", "средний", "простая тональная система", "WALS: 1A, 2A, 13A"],
  ["Йоруба", "Атлантико-конголезская", "умеренно малый", "крупный", "сложная тональная система", "WALS: 1A, 2A, 13A"],
  ["Западногренландский", "Эскимосско-алеутская", "средний", "малый", "нет тонов", "WALS: 1A, 2A, 13A"],
  ["Хмонг Нджуа", "Хмонг-мьенская", "крупный", "средний", "сложная тональная система", "WALS: 1A, 2A, 13A"]
];

const wordOrderGlobal = [
  { label: "SOV", count: 564 },
  { label: "SVO", count: 488 },
  { label: "остальные", count: 324 }
];

const topFamilyPalette = [
  "#533afd",
  "#8087ff",
  "#ff6118",
  "#81b81a",
  "#f44bcc",
  "#7232f1",
  "#ffcf5e",
  "#50617a",
  "#b458ff",
  "#0099a8"
];

const otherFamilyColor = "#64748d";

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

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

function getTypologyColumns() {
  return [
    { data: "name" },
    { data: "family" },
    { data: "macroarea" },
    { data: "wordOrder" },
    { data: "morphType" },
    { data: "cases" },
    { data: "gender" },
    { data: "tones" },
    { data: "evidentiality" }
  ];
}

function getPhonologyColumns() {
  return [
    { data: "name" },
    { data: "family" },
    { data: "macroarea" },
    { data: "consonantInventory" },
    { data: "vowelInventory" },
    { data: "tones" }
  ];
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (window.DataTable) {
        resolve();
      } else {
        reject(new Error("Скрипт уже подключен, но DataTables global не появился."));
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.addEventListener("load", resolve, { once: true });
    script.addEventListener("error", () => reject(new Error(`Не удалось загрузить ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

async function ensureDataTableLoaded() {
  if (window.DataTable) return true;

  const cdnUrls = [
    "https://cdn.jsdelivr.net/npm/datatables.net@2.0.8/js/dataTables.min.js",
    "https://unpkg.com/datatables.net@2.0.8/js/dataTables.min.js"
  ];

  for (const src of cdnUrls) {
    try {
      await loadScript(src);
      if (window.DataTable) return true;
    } catch (error) {
      // Some browser lockdown extensions block third-party table libraries.
      // The page still renders through the local fallback below.
    }
  }

  return false;
}

function renderPlainTypologyRows(rows, visibleRows = rows) {
  const tbody = document.querySelector("#typologyTable tbody");
  if (!tbody) return;
  tbody.innerHTML = visibleRows.map((row) => `
    <tr>
      <td>${escapeHtml(row.name)}</td>
      <td>${escapeHtml(row.family)}</td>
      <td>${escapeHtml(row.macroarea)}</td>
      <td>${escapeHtml(row.wordOrder)}</td>
      <td>${escapeHtml(row.morphType)}</td>
      <td>${escapeHtml(row.cases)}</td>
      <td>${escapeHtml(row.gender)}</td>
      <td>${escapeHtml(row.tones)}</td>
      <td>${escapeHtml(row.evidentiality)}</td>
    </tr>
  `).join("");
}

function setupFallbackTypology(rows, typologyColumns) {
  const filters = document.querySelector("#typologyFilters");
  const tableWrap = document.querySelector("#typologyTable")?.closest(".table-wrap");
  if (!filters || !tableWrap) return;

  let page = 1;
  const pageSize = 50;
  const state = {
    search: "",
    filters: {}
  };

  let controls = document.querySelector("#typologyFallbackControls");
  if (!controls) {
    controls = document.createElement("div");
    controls.id = "typologyFallbackControls";
    controls.className = "dt-layout-row typology-fallback-controls";
    controls.innerHTML = `
      <label class="dt-search">Поиск:
        <input type="search" id="typologyFallbackSearch" autocomplete="off">
      </label>
      <div class="dt-paging">
        <button type="button" id="typologyPrevPage">Предыдущая</button>
        <span id="typologyPageInfo"></span>
        <button type="button" id="typologyNextPage">Следующая</button>
      </div>
    `;
    tableWrap.insertAdjacentElement("beforebegin", controls);
  }

  const searchInput = controls.querySelector("#typologyFallbackSearch");
  const previousButton = controls.querySelector("#typologyPrevPage");
  const nextButton = controls.querySelector("#typologyNextPage");
  const pageInfo = controls.querySelector("#typologyPageInfo");
  const selects = [...filters.querySelectorAll("select[data-column]")];

  const getFilteredRows = () => {
    const search = state.search.trim().toLocaleLowerCase("ru");
    return rows.filter((row) => {
      const matchesSearch = !search || typologyColumns.some((column) =>
        String(row[column.data]).toLocaleLowerCase("ru").includes(search)
      );
      const matchesFilters = Object.entries(state.filters).every(([fieldName, value]) =>
        !value || row[fieldName] === value
      );
      return matchesSearch && matchesFilters;
    });
  };

  const renderPage = () => {
    const filteredRows = getFilteredRows();
    const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
    page = Math.min(page, pageCount);
    const start = (page - 1) * pageSize;
    const visibleRows = filteredRows.slice(start, start + pageSize);
    renderPlainTypologyRows(rows, visibleRows);
    pageInfo.textContent = `Страница ${page} из ${pageCount}; найдено ${filteredRows.length.toLocaleString("ru-RU")}`;
    previousButton.disabled = page <= 1;
    nextButton.disabled = page >= pageCount;
  };

  selects.forEach((select) => {
    const columnIndex = Number(select.dataset.column);
    const fieldName = typologyColumns[columnIndex]?.data;
    if (!fieldName) return;

    select.innerHTML = '<option value="">Все</option>';
    const values = [...new Set(rows.map((row) => row[fieldName]))]
      .filter((value) => value && value !== "—")
      .sort((a, b) => a.localeCompare(b, "ru"));

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      state.filters[fieldName] = select.value;
      page = 1;
      renderPage();
    });
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    page = 1;
    renderPage();
  });
  previousButton.addEventListener("click", () => {
    page -= 1;
    renderPage();
  });
  nextButton.addEventListener("click", () => {
    page += 1;
    renderPage();
  });

  renderPage();
}

function renderPlainPhonologyRows(rows, visibleRows = rows) {
  const tbody = document.querySelector("#phonologyTable tbody");
  if (!tbody) return;
  tbody.innerHTML = visibleRows.map((row) => `
    <tr>
      <td>${escapeHtml(row.name)}</td>
      <td>${escapeHtml(row.family)}</td>
      <td>${escapeHtml(row.macroarea)}</td>
      <td>${escapeHtml(row.consonantInventory)}</td>
      <td>${escapeHtml(row.vowelInventory)}</td>
      <td>${escapeHtml(row.tones)}</td>
    </tr>
  `).join("");
}

function setupFallbackPhonology(rows, phonologyColumns) {
  const filters = document.querySelector("#phonologyFilters");
  const tableWrap = document.querySelector("#phonologyTable")?.closest(".table-wrap");
  if (!filters || !tableWrap) return;

  let page = 1;
  const pageSize = 50;
  const state = {
    search: "",
    filters: {}
  };

  let controls = document.querySelector("#phonologyFallbackControls");
  if (!controls) {
    controls = document.createElement("div");
    controls.id = "phonologyFallbackControls";
    controls.className = "dt-layout-row phonology-fallback-controls";
    controls.innerHTML = `
      <label class="dt-search">Поиск:
        <input type="search" id="phonologyFallbackSearch" autocomplete="off">
      </label>
      <div class="dt-paging">
        <button type="button" id="phonologyPrevPage">Предыдущая</button>
        <span id="phonologyPageInfo"></span>
        <button type="button" id="phonologyNextPage">Следующая</button>
      </div>
    `;
    tableWrap.insertAdjacentElement("beforebegin", controls);
  }

  const searchInput = controls.querySelector("#phonologyFallbackSearch");
  const previousButton = controls.querySelector("#phonologyPrevPage");
  const nextButton = controls.querySelector("#phonologyNextPage");
  const pageInfo = controls.querySelector("#phonologyPageInfo");
  const selects = [...filters.querySelectorAll("select[data-column]")];

  const getFilteredRows = () => {
    const search = state.search.trim().toLocaleLowerCase("ru");
    return rows.filter((row) => {
      const matchesSearch = !search || phonologyColumns.some((column) =>
        String(row[column.data]).toLocaleLowerCase("ru").includes(search)
      );
      const matchesFilters = Object.entries(state.filters).every(([fieldName, value]) =>
        !value || row[fieldName] === value
      );
      return matchesSearch && matchesFilters;
    });
  };

  const renderPage = () => {
    const filteredRows = getFilteredRows();
    const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
    page = Math.min(page, pageCount);
    const start = (page - 1) * pageSize;
    const visibleRows = filteredRows.slice(start, start + pageSize);
    renderPlainPhonologyRows(rows, visibleRows);
    pageInfo.textContent = `Страница ${page} из ${pageCount}; найдено ${filteredRows.length.toLocaleString("ru-RU")}`;
    previousButton.disabled = page <= 1;
    nextButton.disabled = page >= pageCount;
  };

  selects.forEach((select) => {
    const columnIndex = Number(select.dataset.column);
    const fieldName = phonologyColumns[columnIndex]?.data;
    if (!fieldName) return;

    select.innerHTML = '<option value="">Все</option>';
    const values = [...new Set(rows.map((row) => row[fieldName]))]
      .filter((value) => value && value !== "—")
      .sort((a, b) => a.localeCompare(b, "ru"));

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      state.filters[fieldName] = select.value;
      page = 1;
      renderPage();
    });
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    page = 1;
    renderPage();
  });
  previousButton.addEventListener("click", () => {
    page -= 1;
    renderPage();
  });
  nextButton.addEventListener("click", () => {
    page += 1;
    renderPage();
  });

  renderPage();
}

function setupTypologyFilters(rows, typologyColumns, dataTable) {
  const filters = document.querySelector("#typologyFilters");
  if (!filters) return;

  const selects = [...filters.querySelectorAll("select[data-column]")];

  selects.forEach((select) => {
    const columnIndex = Number(select.dataset.column);
    const fieldName = typologyColumns[columnIndex]?.data;
    if (!fieldName) return;

    const currentValue = select.value;
    select.innerHTML = '<option value="">Все</option>';
    const values = [...new Set(rows.map((row) => row[fieldName]))]
      .filter((value) => value && value !== "—")
      .sort((a, b) => a.localeCompare(b, "ru"));

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
    select.value = currentValue;
  });

  selects.forEach((select) => {
    select.addEventListener("change", () => {
      selects.forEach((filterSelect) => {
        const columnIndex = Number(filterSelect.dataset.column);
        const value = filterSelect.value;
        dataTable
          .column(columnIndex)
          .search(value ? `^${escapeRegex(value)}$` : "", true, false);
      });
      dataTable.draw();
    });
  });
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

    const hasDataTable = await ensureDataTableLoaded();
    if (!hasDataTable) {
      setupFallbackTypology(rows, typologyColumns);
      return;
    }

    const dataTable = new DataTable("#typologyTable", {
      data: rows,
      columns: typologyColumns,
      pageLength: 50,
      order: [[0, "asc"]],
      language: {
        search: "Поиск:",
        lengthMenu: "Показать _MENU_ записей",
        info: "Показаны _START_-_END_ из _TOTAL_",
        infoEmpty: "Нет записей",
        zeroRecords: "Совпадений не найдено",
        paginate: {
          first: "Первая",
          last: "Последняя",
          next: "Следующая",
          previous: "Предыдущая"
        }
      }
    });

    setupTypologyFilters(rows, typologyColumns, dataTable);
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

    setupFallbackPhonology(rows, phonologyColumns);
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

function translateStatsLabel(value) {
  const labels = {
    "0-1 category per word": "0-1 категория на слово",
    "2-3 categories per word": "2-3 категории на слово",
    "4-5 categories per word": "4-5 категорий на слово",
    "6-7 categories per word": "6-7 категорий на слово",
    "8-9 categories per word": "8-9 категорий на слово",
    "10-11 categories per word": "10-11 категорий на слово",
    "12-13 categories per word": "12-13 категорий на слово",
    "No dominant order": "без доминирующего порядка"
  };
  return labels[value] || value;
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
        `Семья: ${escapeHtml(family)}`,
        `Ареал: ${escapeHtml(language.macroarea)}`,
        `Порядок слов: ${escapeHtml(language.wordOrder)}`
      ];

      if (language.speakers !== undefined && language.speakers !== null && language.speakers !== "") {
        popupRows.push(`Носителей: ${escapeHtml(formatNumber(language.speakers))}`);
      }

      const marker = L.circleMarker([Number(language.latitude), Number(language.longitude)], {
        radius: 5,
        color: "#ffffff",
        weight: 1,
        fillColor: color,
        fillOpacity: 0.85
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
        <span>${escapeHtml(item.family)}</span>
      </div>
    `).join("");
  } catch (error) {
    const legend = document.querySelector("#mapLegend");
    if (legend) {
      legend.textContent = "Не удалось загрузить data/languages.json.";
    }
    console.error("Map loading failed:", error);
    alert(`Не удалось загрузить данные карты: ${error.message}`);
  }
}

function initTopLanguagesChart() {
  const canvas = document.querySelector("#topLanguagesChart");
  if (!canvas || !window.Chart) return;
  const top = [...chartLanguages].sort((a, b) => b.speakers - a.speakers).slice(0, 15).reverse();
  new Chart(canvas, {
    type: "bar",
    data: {
      labels: top.map((language) => language.name),
      datasets: [{
        label: "Носителей, млн",
        data: top.map((language) => language.speakers),
        backgroundColor: "#533afd",
        borderColor: "#061b31",
        borderWidth: 1
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
      type: "pie",
      data: {
        labels: counts.map(([label]) => translateStatsLabel(label)),
        datasets: [{
          label: `WALS 22A: ${morphTypeCount.toLocaleString("ru-RU")} из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют данные`,
          data: counts.map(([, count]) => count),
          backgroundColor: ["#533afd", "#8087ff", "#ff6118", "#81b81a", "#ffcf5e", "#f44bcc", "#0099a8"]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw.toLocaleString("ru-RU")}`
            }
          }
        }
      }
    });
  }

  if (wordOrderCanvas && window.Chart) {
    const wordOrderCounts = countByField(walsLanguages, "wordOrder");
    const wordOrderStats = [
      { label: "SOV", count: wordOrderCounts.get("SOV") || 0 },
      { label: "SVO", count: wordOrderCounts.get("SVO") || 0 },
      { label: "VSO", count: wordOrderCounts.get("VSO") || 0 },
      { label: "VOS", count: wordOrderCounts.get("VOS") || 0 },
      { label: "OVS", count: wordOrderCounts.get("OVS") || 0 },
      { label: "OSV", count: wordOrderCounts.get("OSV") || 0 },
      { label: "без доминирующего порядка", count: wordOrderCounts.get("No dominant order") || 0 }
    ];

    new Chart(wordOrderCanvas, {
      type: "bar",
      data: {
        labels: wordOrderStats.map((item) => item.label),
        datasets: [{
          label: `WALS 81A: ${wordOrderCount.toLocaleString("ru-RU")} из ${walsLanguages.length.toLocaleString("ru-RU")} языков имеют данные`,
          data: wordOrderStats.map((item) => item.count),
          backgroundColor: ["#533afd", "#8087ff", "#ff6118", "#81b81a", "#ffcf5e", "#f44bcc", "#0099a8"]
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
  setupImageLightbox();
  fillTypologyTable();
  fillFamiliesTable();
  fillPhonologyTable();
  initMap();
  initTopLanguagesChart();
  initStats();
});
