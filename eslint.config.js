import antfu from "@antfu/eslint-config"

export default antfu({
  react: true,
  typescript: true,
  gitignore: true,
  formatters: true,
  stylistic: {
    jsx: true,
    indent: 2,
    quotes: "double",
    semi: false,
  },
  rules: {
    "no-console": ["warn", { allow: ["debug"] }],
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["warn", "type"],
    "react/prop-types": "off",
    "react-refresh/only-export-components": "off",
    "n/prefer-global/process": "off",
  },
  ignores: ["./tsconfig.json"],
})
