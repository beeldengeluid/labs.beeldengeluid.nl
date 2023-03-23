module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': 0, //disable prettier
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'index', 'error', 'about'],
      },
    ],
  },
}
