import { BaseTranslation } from "../../i18n-types";

const it_discord = {
  settings: {
    name: 'impostazioni',
    description: 'Accedi e gestisci le impostazioni del tuo server.',
  },
  ['settings.locale']: {
    name: 'locale',
    description: 'Cambia le impostazioni della lingua utilizzata nel tuo server.',
  },
  ['settings.locale.value']: {
    name: 'valore',
    description: 'Specifica la lingua preferita nel tuo server.',
  },
  ['settings.news']: {
    name: 'news',
    description: 'Controlla le impostazioni degli aggiornamenti nel tuo server.',
  },
  ['settings.news.enable']: {
    name: 'attiva',
    description: 'Attiva la funzione aggiornamenti nel tuo server.',
  },
  ['settings.news.enable.channel']: {
    name: 'canale',
    description: 'Scegli il canale dove verranno pubblicati gli aggiornamenti.',
  },
  ['settings.news.disable']: {
    name: 'disattiva',
    description: 'Disattiva la funzione aggiornamenti nel tuo server.',
  },
  help: {
    name: 'aiuto',
    description: "Mostra un elenco completo dei comandi disponibili di Zeki.",
  },
  about: {
    name: 'info',
    description: 'Mostra informazioni dettagliate su Zeki.',
  },
  quest: {
    name: 'quest',
    description: 'Cerca i quest e informazioni correlate.',
  },
  'quest.query': {
    name: 'richiesta',
    description: 'Quale quest stai cercando?',
  },
  villager: {
    name: 'abitante',
    description: 'Trova informazioni su specifici abitanti del villaggio.',
  },
  'villager.query': {
    name: 'richiesta',
    description: 'Quale abitante del villaggio stai cercando?',
  },
  recipe: {
    name: 'ricetta',
    description: 'Cerca le ricette artigianali e i dettagli di lavorazione.',
  },
  'recipe.query': {
    name: 'richiesta',
    description: 'Che ricetta stai cercando?',
  },
  'recipe.amount': {
    name: 'quantita',
    description: 'Specifica la quantità degli oggetti da creare.',
  },
  item: {
    name: 'oggetto',
    description: 'Cerca l'oggetto e i dettagli correlati.',
  },
  'item.query': {
    name: 'richiesta',
    description: 'Quale oggetto stai cercando?',
  },
  weekly: {
    name: 'settimanale',
    description: 'Ritrova le preferenze settimanali e regali ricercati dagli abitanti di villaggio.',
  },
  bundle: {
    name: 'bundle',
    description: 'Cerca informazioni sui bundle e sui loro contenuti.',
  },
  'bundle.query': {
    name: 'richiesta',
    description: 'Quale bundle stai cercando?',
  },
  accomplishment: {
    name: 'traguardo',
    description: 'Cerca informazioni e dettagli sui traguardi.',
  },
  'accomplishment.query': {
    name: 'richiesta',
    description: 'Quale traguardo stai cercando?',
  },
} satisfies BaseTranslation;

export default it_discord;
