module.exports = {
  env: {
    node: true,
    webextensions: true,
  },
  extends: [
    "plugin:mozilla-lockbox/recommended",
    "plugin:mozilla/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: [
    "mozilla",
    "react",
  ],
};
