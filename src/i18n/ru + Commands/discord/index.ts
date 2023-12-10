import { BaseTranslation } from "../../i18n-types";

const ru_discord = {
  settings: {
    name: 'настройки',
    description: 'Управление настройками сервера.',
  },
  ['settings.locale']: {
    name: 'локаль',
    description: 'Изменение языковых настроек в вашем сервере.',
  },
  ['settings.locale.value']: {
    name: 'value',
    description: 'Укажите предпочитаемый язык для вашего сервера.',
  },
  ['settings.news']: {
    name: 'новости',
    description: 'Управление настройками новостей в вашем сервере.',
  },
  ['settings.news.enable']: {
    name: 'подключить',
    description: 'Подключите сводку новостей в вашем сервере.',
  },
  ['settings.news.enable.channel']: {
    name: 'канал',
    description: 'Укажите канал для сводки новостей.',
  },
  ['settings.news.disable']: {
    name: 'отключить',
    description: 'Отключите сводку новостей в вашем сервере.',
  },
  help: {
    name: 'помощь',
    description: "Показать полный список доступных команд Zeki.",
  },
  about: {
    name: 'инфо',
    description: 'Подробная информация о Zeki.',
  },
  quest: {
    name: 'квест',
    description: 'Поиск квестов и подлежащей информации.',
  },
  'quest.query': {
    name: 'запрос',
    description: 'Какой квест ваc интересует?',
  },
  villager: {
    name: 'villager',
    description: 'Поиск информации о конкретных местных жителях.',
  },
  'villager.query': {
    name: 'запрос',
    description: 'Кто из местных жителей ваc интересует?',
  },
  recipe: {
    name: 'рецепт',
    description: 'Поиск рецептов для крафта и соответствующих деталей.',
  },
  'recipe.query': {
    name: 'запрос',
    description: 'Какой рецепт ваc интересует?',
  },
  'recipe.amount': {
    name: 'количество',
    description: 'Уточните количество предметов для крафта.',
  },
  item: {
    name: 'предмет',
    description: 'Поиск предметов и соответствующих деталей.',
  },
  'item.query': {
    name: 'запрос',
    description: 'Какой предмет ваc интересует?',
  },
  weekly: {
    name: 'еженедельно',
    description: 'Список еженедельно предпочитаемых и желаемых подарков для местных жителей.',
  },
  bundle: {
    name: 'бандл',
    description: 'Поиск информации о бандлах и их содержимом.',
  },
  'bundle.query': {
    name: 'запрос',
    description: 'Какой бандл ваc интересует?',
  },
  accomplishment: {
    name: 'достижение',
    description: 'Поиск достижений и соответствующих деталей.',
  },
  'accomplishment.query': {
    name: 'запрос',
    description: 'Какое достижение ваc интересует?',
  },
} satisfies BaseTranslation;

export default ru_discord;
