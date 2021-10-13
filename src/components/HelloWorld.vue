<script lang="ts">
import Nav from './Nav.vue'

export default {
  components: { Nav },
}
</script>

<template lang="pug">
Nav/
main.mt-12
<h1>One Very Long Exasperated Sigh</h1>

<router-link to="/purple"> Onto the show! </router-link>
</template>

<style lang="scss" scoped>
a {
  color: orangered;

  &:hover {
    color: red;
  }
}
</style>
