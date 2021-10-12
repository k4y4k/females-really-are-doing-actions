<template lang="pug">
section.w-full.bg-black.text-white.py-1.monospace(data-testid="info-bar")
  aside.my-3
    span( id="who-icon").w-10.inline-block.mx-5.h-auto 💌
    p.tracking-widest.inline-block {{ uppercase }}

div(data-testid="info-expanded" id="info-expanded").my-8.bg-black.text-white.py-3
  p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tincidunt tortor. Vestibulum at fringilla augue, et condimentum neque. Donec sed porta lacus. Suspendisse fringilla a odio et eleifend. Donec vitae metus et mi ultrices mattis. Sed interdum diam et est fermentum, ac bibendum lorem tincidunt. Praesent auctor tortor felis, vitae pulvinar dolor blandit id.

  div.sep

  p The only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the only other thing of interest is the

</template>

<script lang="ts">
export default {
  computed: {
    // FIXME: don't hardcode this
    uppercase: () => 'PURPLE',
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
