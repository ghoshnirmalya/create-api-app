import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    splitting: false,
    clean: true,
    minify: !options.watch,
    sourcemap: !options.watch,
    dts: true,
  };
});
