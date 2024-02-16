module.exports = {
  extends: ["plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
  root: true,
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "req|res|next" }],
    "max-len": ["error", { code: 180 }],
    "prettier/prettier": [
      "error",
      {
        printWidth: 180,
      },
    ],
  },
};
