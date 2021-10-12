<template lang="pug">
section.w-full.bg-black.text-white.py-3.monospace.flex.flex-row.flex-wrap(data-testid="info-bar")
  span( id="who-icon").w-10.inline-block.mx-5.h-auto 💌
  p.tracking-widest.inline-block {{ uppercase }}
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
</style>
