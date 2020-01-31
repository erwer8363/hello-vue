module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser:'babel-eslint',
    sourceType: 'module',
  },
  settings:{
    'import/resolver': {
      alias: {
        map:[
          ['@','./src/']
        ]
      }
    }
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': "off",
    quotes: [1,'single'],
    eqeqeq: "error",
    strict: "error",
    'use-isnan': "error",
    'prefer-reflect': 1,
    'prefer-const': 1,
    'prefer-spread': 1,
    'id-match': 1,
    indent: [2,2],
    'no-var': 2,
    'no-use-before-define': 2,
    semi: "off",
    'no-console': "off",
    'global-require': "off",
    'no-param-reassign': "off",
    'no-shadow': "off"
  },
};
