module.exports = {
  parser: 'babel-eslint',
  extends: ["airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    jest: true,
  },
  rules: {
      
  },
};
