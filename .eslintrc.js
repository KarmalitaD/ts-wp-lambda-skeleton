module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: { node: true },
  globals: {},
  rules: {
    'max-len': ['warn'],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
