module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: ['@yoyoys/vue-typescript-prettier-airbnb'],
};
