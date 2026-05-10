# Языки мира и их типология

Статический справочник по лингвистической типологии. Показывает, как языки
мира можно сравнивать по порядку слов, падежной системе, роду, тональности,
эвиденциальности и фонологическим признакам.

## Страницы

| Файл | Что показывает |
|------|----------------|
| `index.html` | Обзор темы, оглавление признаков WALS, источники данных. |
| `families.html` | Таблица языковых семей и Chart.js-диаграмма топ-15 языков по числу носителей. |
| `map.html` | Интерактивная карта языков на Leaflet; маркеры раскрашены по макроареалам WALS. |
| `typology.html` | Tabulator-таблица по признакам WALS 81A, 22A, 49A, 31A, 13A, 77A. |
| `phonology.html` | Tabulator-таблица по признакам WALS 1A, 2A, 13A. |
| `stats.html` | Сводные карточки и графики по морфологии и порядку слов. |

## Структура проекта

```
site/
├── index.html, families.html, map.html, …   # страницы сайта
├── css/style.css                            # стили, International Typographic Style
├── js/main.js                               # всё поведение: таблицы, карта, графики
├── build-data.js                            # сборка JSON из сырого WALS CLDF
├── data/
│   ├── languages.json                       # итоговая выборка для typology/map/stats
│   ├── phonology.json                       # итоговая выборка для phonology
│   └── raw/                                 # сырые CSV из WALS (CLDF-формат)
│       ├── languages.csv
│       ├── parameters.csv
│       ├── codes.csv
│       └── values.csv
└── README.md
```

## Дизайн

Оформление — в духе швейцарского интернационального типографического стиля
(International Typographic Style): 12-колоночная сетка, единственный sans-serif
(Inter), нулевые скругления, четыре базовых цвета (бумага `#ffffff`, ink
`#0a0a0a`, hairline rule `#d4d4d4`, акцент `#d92121`). Палитры графиков
(`chartPalette`, `barLanguagesPalette`, `macroareaColorMap` в `js/main.js`)
построены как категориальные наборы в том же приглушённом диапазоне.

## Как запустить локально

Сайт полностью статический, сборка не нужна. Но из-за `fetch("data/…json")`
открывать `index.html` двойным кликом нельзя — нужен локальный HTTP-сервер:

```bash
# любой из вариантов
python3 -m http.server 8000
# или
npx serve .
```

Затем открыть <http://localhost:8000/>.

## Как пересобрать данные

`data/languages.json` и `data/phonology.json` закоммичены в репозиторий, чтобы
сайт работал без Node.js. Но если обновить сырые CSV из WALS, JSON можно
перегенерировать:

```bash
node build-data.js
```

Скрипт:
- читает `data/raw/*.csv` (CLDF-дамп WALS),
- оставляет только признаки из `FEATURE_MAP` и `PHONOLOGY_FEATURE_MAP`,
- пишет результат в `data/languages.json` и `data/phonology.json`,
- сортирует языки по алфавиту, чтобы дифы оставались читаемыми.

## Внешние библиотеки

Подключаются с CDN, npm-зависимостей нет:

- [Chart.js 4](https://www.chartjs.org/) — графики на `families.html` и `stats.html`.
- [Leaflet](https://leafletjs.com/) + тайлы OpenStreetMap — карта на `map.html`.
- [Tabulator](https://tabulator.info/) — таблицы на `typology.html` и `phonology.html`.
- [Inter](https://fonts.google.com/specimen/Inter) с Google Fonts — единственный шрифт интерфейса.

## Источники данных

- [WALS Online v2020.4](https://wals.info/) — типологические признаки. Проект
  закрыт, обновлений больше не будет; используется финальный дамп.
- [Glottolog 5.3](https://glottolog.org/) — классификация семей и изолятов.
- Wikipedia / Ethnologue — оценки числа носителей (в `families.html` и
  справочной таблице для топ-15 языков).

В локальной WALS-выборке 1 614 языков и 224 семьи или изолята; заполненность
признаков варьируется (см. §02 на `index.html`).
