import esbuild from "rollup-plugin-esbuild";

/*
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "cohere.ts",
  output: {
    dir: "dist",
    esModule: true,
    format: "esm",
  },
  exclude: ["node_modules/**"],
  plugins: [
    esbuild({
      minify: true,
      format: "esm",
    }),
  ],
};
