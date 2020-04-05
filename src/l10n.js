
import { writable, derived } from 'svelte/store'

const $locale = writable(undefined)

const createTranslator = locale => str => locale && locale[str] || str

export const setLocale = (locale) => $locale.set(locale)
export default derived($locale, createTranslator)
