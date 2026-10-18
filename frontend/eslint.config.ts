import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: [
      "js/recommended",
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    languageOptions: { globals: globals.browser },
    rules: { "react/react-in-jsx-scope": "off" },
  },

  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    languageOptions: {
      tolerant: true,
    },
    rules: {
      "css/no-invalid-at-rules": "off",
    },
    extends: ["css/recommended"],
  },
]);
