import { createBundle } from 'dts-buddy';

await createBundle({
  project: 'tsconfig.json',
  output: 'dist/types/index.d.ts',
  modules: {
    'cohere': 'dist/cohere.js',
  }
});