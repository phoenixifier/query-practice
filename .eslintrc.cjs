module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    'simple-import-sort',
    'import'
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    'simple-import-sort/imports': 'error',
    'import/extensions': ['error', {
      '.ts': 'never',
      '.tsx': 'never',
    }],
    '@typescript-eslint/no-unused-vars': 'off',
  }
};