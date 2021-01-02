import Vue from 'vue'
import VueI18n from "vue-i18n";


Vue.use(VueI18n)

const messages = {
  'en': {

  },
  'pl': {
    'Session': 'Sesja',
    'Start time': 'Czas rozpoczęcia',
    'End time': 'Czas zakończenia',
    'Description': 'Opis'
  }
}

const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages
})

export default i18n
