import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      semi: ["error"],
      "prefer-template": ["error"],
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
