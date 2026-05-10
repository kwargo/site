# Языки мира и их типология

Статический справочник по лингвистической типологии. Показывает, как языки мира
можно сравнивать по порядку слов, падежной системе, роду, тональности,
эвиденциальности и фонологическим признакам.

## Страницы

| Файл | Что показывает |
|------|----------------|
| `index.html` | Обзор темы, описание признаков WALS, источники данных. |
| `families.html` | Таблица языковых семей и Chart.js-диаграмма топ-15 языков по числу носителей. |
| `map.html` | Интерактивная карта языков на Leaflet; маркеры раскрашены по семьям. |
| `typology.html` | Tabulator-таблица с признаками WALS 81A, 22A, 49A, 30A, 13A, 77A. |
| `phonology.html` | Tabulator-таблица с признаками WALS 1A, 2A, 13A. |
| `stats.html` | Сводные карточки и графики по морфологии и порядку слов. |

## Структура проекта

```
site/
├── index.html, families.html, map.html, …   # страницы сайта
├── css/style.css                            # стили (дизайн-токены — см. DESIGN.md)
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
└── DESIGN.md                                # дизайн-система (Academic Journal on Vellum)
```

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

`data/languages.json` и `data/phonology.json` коммитятся в репозиторий, чтобы
сайт работал без Node. Но если обновить сырые CSV из WALS, JSON можно
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

## Источники данных

- [WALS Online v2020.4](https://wals.info/) — типологические признаки.
- [Glottolog 5.3](https://glottolog.org/) — классификация семей и изолятов.
- Wikipedia / Ethnologue — оценки числа носителей.
- Wikimedia Commons — иллюстрации.

## Дизайн

Цвета, типографика и компоненты описаны в [`DESIGN.md`](./DESIGN.md) —
стиль «Academic Journal on Vellum»: кремовый фон, Ink Black текст, Terra Cotta
как единственный акцент. Палитры графиков (`chartPalette`, `topFamilyPalette`
в `js/main.js`) взяты оттуда же.
