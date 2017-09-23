module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "curly": "error",
    "indent": ["error", 2, {SwitchCase: 1, VariableDeclarator: {var: 2, let: 2, const: 3}}],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  }
};
