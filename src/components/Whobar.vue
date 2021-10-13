<template lang="pug">
section.w-full.bg-black.text-white.p-3.monospace(data-testid="info-bar")
  span(data-testid="who-icon" id="who-icon").w-10.inline-block.mx-5.h-auto 💌
  p(data-testid="who-name" id="who-name").tracking-widest.inline-block {{ uppercase }}

section(data-testid="info-expanded" id="info-expanded").my-8.bg-black.text-white.p-3
  p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tincidunt tortor. Vestibulum at fringilla augue, et condimentum neque. Donec sed porta lacus. Suspendisse fringilla a odio et eleifend. Donec vitae metus et mi ultrices mattis. Sed interdum diam et est fermentum, ac bibendum lorem tincidunt. Praesent auctor tortor felis, vitae pulvinar dolor blandit id.

  div.sep

  p The only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the

//- TODO: remove testids from prod
section(data-testid="info-more-from" id="info-more-from").my-8.bg-black.text-white.p-3
  h2.uppercase.tracking-widest ALSO FROM #[span.inline-block.mx-5.h-auto 💌] ECTOPLASM ROMANCE:

  div.flex.flex-row.overflow-hidden(data-testid="rogues-gallery")
    img(v-for="i in Array(3).fill('')" :src="`${moreImage}`").more-image.w-40.m-3.inline
</template>

<script lang="ts">
import steelBlueImg from '../img/export/pre_Steel_Blue.png'
export default {
  computed: {
    // FIXME: don't hardcode this
    uppercase: () => 'PURPLE',

    moreImage: () => steelBlueImg,
  },
}
</script>

<style lang="scss" scoped>
section {
  z-index: 100;
}

#info-expanded {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  p {
    max-width: 33vw;
    margin: 1.5rem 3rem;
  }
}

.sep {
  width: 1px;
  height: 80px;
  background-color: white;
  margin: auto 0;
}
</style>
