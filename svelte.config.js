import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import firebase from "svelte-adapter-firebase";
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      // pages: 'build',
      // assets: 'build',
      // fallback: null,
      // precompress: false,
      // strict: true
    }),
  },
};

export default config;
