module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "max-len": [
      "error",
      { code: 120, ignoreRegExpLiterals: true, ignoreComments: true },
    ],
    "import/prefer-default-export": "off",
    "jest/valid-title": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
  },
  plugins: ["jest"],
};
