<template lang="pug">
nav
  router-link#title(to='/')
    h1 Complex Compendium

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav',
})
</script>

<style lang="scss" scoped>
nav {
  @apply flex flex-row flex-wrap bg-transparent text-black justify-center w-full h-12;
}

router-link {
  @apply block whitespace-nowrap;
}

h1 {
  @apply font-bold hover:tracking-widest transition-all  m-3;
}
</style>
