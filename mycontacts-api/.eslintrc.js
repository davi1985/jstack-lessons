module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'object-curly-newline': 'off',
    'max-len': 'off',
  },
};
