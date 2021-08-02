import colors from 'vuetify/es5/util/colors'

const theme = {
  primary: colors.blue.darken2, // dataset
  secondary: colors.amber.darken3, // project
  tertiary: colors.pink.darken1, // blog
  quaternary: colors.purple.darken1, // theme
  quinary: colors.teal.darken1, // lab
  senary: colors.green.darken1, // api
  accent: colors.grey.darken3,
  info: colors.teal.lighten1,
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3,
}

export const classColorIndex = {
  dataset: 'primary',
  project: 'secondary',
  blog: 'tertiary',
  theme: 'quaternary',
  lab: 'quinary',
  api: 'senary',
}

export const classColors = {
  dataset: theme[classColorIndex.dataset],
  project: theme[classColorIndex.project],
  blog: theme[classColorIndex.blog],
  theme: theme[classColorIndex.theme],
  lab: theme[classColorIndex.lab],
  api: theme[classColorIndex.api],
}

export default theme
