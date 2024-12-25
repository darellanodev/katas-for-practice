const js = require("@eslint/js");
const prettierConfig = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: "script", // for commonJS
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      jest: require("eslint-plugin-jest"),
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "crlf",
        },
      ],
      "linebreak-style": ["error", "windows"],
    },
    overrides: [
      {
        files: ["**/*.test.js", "**/*.spec.js"],
        env: {
          jest: true, 
        },
      },
    ],
  },
];
