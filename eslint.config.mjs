import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], 
    rules: {
      "react/display-name": "off", 
      "no-console": "warn", 
      "@next/next/no-html-link-for-pages": "off",

      // Add custom rule severity or overrides
      "react/jsx-key": "warn", // Ensure React elements have keys, but as a warning
      "no-unused-vars": ["error", { varsIgnorePattern: "^_" }], // Ignore unused variables starting with "_"
    },
  },
];

export default eslintConfig;
