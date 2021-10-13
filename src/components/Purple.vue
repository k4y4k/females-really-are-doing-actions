<template lang="pug">
Nav/

div.container
  //- FIXME: don't hardcode this
  h1(data-testid="hero-name").font-bold Purple
#hero-container
  img(:src="`${imageUrl}`" id="purple-hero" data-testid="hero-image")

Whobar

</template>

<script lang="ts">
import Nav from './Nav.vue'
// TODO: Vite image plugin
import imgUrl from '../img/export/Purple.png'
import Whobar from './Whobar.vue'
import NextPrevButtons from './NextPrevButtons.vue'

export default {
  components: { Nav, Whobar, NextPrevButtons },
  computed: {
    imageUrl: () => imgUrl,
  },
}
</script>

<style lang="scss" scoped>
// FIXME: use Vite font plugin
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');

#hero-container {
  position: absolute;
  top: 60px;
  right: 2vw;
  z-index: -10;
}

#purple-hero {
  height: 133vh;
}

.container {
  height: 87vh;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  align-content: center;
}

h1 {
  // prettier-ignore
  font-family:
    'Jost',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 30vh;

  /* FIXME: not a replacement for a custom kerned .svg or something */
  letter-spacing: -30px;
  line-height: 200px;
  z-index: -20;
}
</style>
