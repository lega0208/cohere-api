// import type { OutputOptions } from "rollup";
// import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import esbuild from "rollup-plugin-esbuild";

/*
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "cohere.ts",
  output: {
    dir: "dist",
    // file: "dist/cohere.mjs",
    esModule: true,
    format: "esm",
  },
  exclude: ["node_modules/**"],
  plugins: [
    esbuild({
      minify: true,
      format: "esm",
    }),
    // swc(
    //   defineRollupSwcOption({
    //     tsconfig: false,
    //     module: {
    //       type: "es6",
    //       strict: true,
    //     },
    //     jsc: {
    //       parser: {
    //         syntax: "typescript",
    //       },
    //       target: "esnext",

    //       baseUrl: "Z:/Projects/cohere-api",
    //       paths: {
    //         "@/*": ["services/*"],
    //       }
    //     }
    //   })
    // ),
  ],
};
