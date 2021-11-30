import { isUrl } from './url'

export const isObjectWithIdTypeName = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    ['@id', '@type', 'name'].every((key) => key in obj) &&
    isUrl(obj['@id'])
  )
}

export const isObjectWithIdOnly = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 1 &&
    Object.keys(obj)[0] === '@id' &&
    isUrl(obj['@id'])
  )
}

export const isSchemaProp = (string) => {
  return string.startsWith('https://schema.org/')
}

export const stripSchemaURL = (string) => {
  return string.replace('https://schema.org/', '')
}

export const camel2title = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()
