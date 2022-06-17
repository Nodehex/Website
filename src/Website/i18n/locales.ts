import en from './strings/en.json'
import se from './strings/se.json'

export type LocaleDefinition = {
  [key: string]: {
    [key:string]: string
  } | LocaleDefinition | string
};

export const locales: LocaleDefinition = {
  en,
  se
};