<template lang="pug">
nav.flex.flex-row.flex-wrap.bg-transparent.text-black.justify-center.absolute.top-0.w-full
  router-link#title.block.whitespace-nowrap.mx-2(to='/').py-3
    h1.font-bold Complex Compendium

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav',
})
</script>

<style lang="scss" scoped>
nav {
  font-size: 16px;
}
</style>
