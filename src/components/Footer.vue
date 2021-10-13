<template lang="pug">
footer
  .text-container
    p This is a work of fiction. Unless otherwise indicated, all the names, characters, businesses, places, events and incidents within this website are either the product of the author’s imagination or used in a fictitious manner.
    br
    p.important Any resemblance to actual persons, living or dead, or actual events is purely coincidental.
    hr
    p (c) ­2021 @nvrbovr
</template>

<script lang="ts">
// empty export to satisfy tests
export default {}
</script>

<style lang="scss" scoped>
footer {
  @apply p-4 text-sm border-t mt-8 border-black;
}

.text-container {
  max-width: 65ch;
}

hr {
  @apply border border-black my-4;
}

.important {
  @apply font-bold;
}
</style>
