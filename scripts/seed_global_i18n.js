const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../locales');
const languages = ['en', 'nl', 'bg'];

const globalTranslations = {
  en: {
    "common": {
      "bank_name": "Continental Kreditbank",
      "bank_name_full": "Continental Kreditbank International",
      "bank_slogan": "Worldwide Banking Excellence",
      "publications": "Publications",
      "services_available": "{{count}} available services",
      "city_munich": "Munich",
      "services": "Services",
      "all_rights_reserved": "All rights reserved",
      "legal_notice": "Legal Notice",
      "request_loan_btn": "Calculate My Loan",
      "partners": "Partners",
      "all": "All",
      "search": "Search",
      "filter": "Filter",
      "read_more": "Read More",
      "page": "Page",
      "contact_us": "Contact Us",
      "validate": "Validated",
      "rating": "Rating"
    },
    "bank": {
      "careers": "Careers",
      "press": "Press Room",
      "client_area": "Client Portal"
    },
    "pages": {
      "governance": {
        "transparency": "Transparency",
        "transparency_desc": "Open and clear communication about all decisions and processes."
      }
    }
  },
  nl: {
    "common": {
      "bank_name": "Continental Kreditbank",
      "bank_name_full": "Continental Kreditbank International",
      "bank_slogan": "Wereldwijde Bancaire Uitmuntendheid",
      "publications": "Publicaties",
      "services_available": "{{count}} beschikbare diensten",
      "city_munich": "Munich",
      "services": "Diensten",
      "all_rights_reserved": "Alle rechten voorbehouden",
      "legal_notice": "Juridische Mededeling",
      "request_loan_btn": "Bereken Mijn Lening",
      "partners": "Partners",
      "all": "Alle",
      "search": "Zoeken",
      "filter": "Filter",
      "read_more": "Lees Meer",
      "page": "Pagina",
      "contact_us": "Neem Contact Op",
      "validate": "Gevalideerd",
      "rating": "Beoordeling"
    },
    "bank": {
      "careers": "Carrières",
      "press": "Persruimte",
      "client_area": "Cliëntportaal"
    },
    "pages": {
      "governance": {
        "transparency": "Transparantie",
        "transparency_desc": "Open en duidelijke communicatie over alle beslissingen en processen."
      }
    }
  },
  bg: {
    "common": {
      "bank_name": "Continental Kreditbank",
      "bank_name_full": "Continental Kreditbank International",
      "bank_slogan": "Глобално банково съвършенство",
      "publications": "Публикации",
      "services_available": "{{count}} налични услуги",
      "city_munich": "Мюнхен",
      "services": "Услуги",
      "all_rights_reserved": "Всички права запазени",
      "legal_notice": "Правно известие",
      "request_loan_btn": "Изчислете моя заем",
      "partners": "Партньори",
      "all": "Всички",
      "search": "Търсене",
      "filter": "Филтър",
      "read_more": "Прочети повече",
      "page": "Страница",
      "contact_us": "Свържете се с нас",
      "validate": "Валидирано",
      "rating": "Рейтинг"
    },
    "bank": {
      "careers": "Кариери",
      "press": "Пресслужба",
      "client_area": "Клиентски портал"
    },
    "pages": {
      "governance": {
        "transparency": "Прозрачност",
        "transparency_desc": "Открита и ясна комуникация за всички решения и процеси."
      }
    }
  }
};

const mergeDeep = (target, source) => {
  const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));
  if (!isObject(target) || !isObject(source)) return source;
  Object.keys(source).forEach(key => {
    if (isObject(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      mergeDeep(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  });
  return target;
};

languages.forEach(lang => {
  const filePath = path.join(localesPath, `${lang}.json`);
  let content = {};
  if (fs.existsSync(filePath)) {
    try {
      content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.error(`Error parsing ${lang}.json:`, e);
    }
  }
  const mergedContent = mergeDeep(content, globalTranslations[lang] || {});
  fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2), 'utf8');
  console.log(`Updated ${lang}.json successfully.`);
});
