import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  ignores: ["node_modules/**", "coverage/**"],
},
{
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      ...globals.node,
    },
  },
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error",
    eqeqeq: ["error", "always"],
  },
},
{
  files: ["__tests__/**/*.js"],
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },
  rules: {
    // On peut alléger certaines règles dans les tests si besoin
  },
});