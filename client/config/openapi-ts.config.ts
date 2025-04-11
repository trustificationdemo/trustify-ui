import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  plugins: ["@hey-api/client-axios"],
  input: "./openapi/trustd.yaml",
  output: {
    path: "src/app/client",
    format: "prettier",
    lint: "eslint",
  },
});
