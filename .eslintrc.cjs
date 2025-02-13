module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [],
  rules: {
    "no-unused-vars": "warn",
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "jsx-quotes": ["error", "prefer-single"],
  },
};
