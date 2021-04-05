import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'

export default {
  plugins: [
    svelte({
      /**
       * Auto preprocess supported languages with
       * '<template>'/'external src files' support
       **/
      preprocess: sveltePreprocess()
    })
  ]
}