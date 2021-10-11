<template lang="pug">
nav.flex.flex-row.flex-wrap.bg-gray-300.h-10.p-2(class='sm:flex-nowrap')
  .flex.w-full(class='sm:w-auto')
    router-link#title.block.whitespace-nowrap.mx-2(to='/')
      h1.font-bold Home

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav',
})
</script>

<style scoped lang="scss">
nav {
  background: black;
  color: white;
  font-family: monospace;

  h1 {
    padding: 10px;
    margin: 10px;
  }

  a {
    color: white;
  }
}
</style>
