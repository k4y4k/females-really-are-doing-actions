<template lang="pug">
button(data-testid="left-button").left-button 🧶 dimension-hopping yarn cowgirl
button(data-testid="right-button").right-button 📚️ birds of a feather
</template>

<style lang="scss" scoped>
button {
  @apply hover:bg-white hover:text-black bg-black text-white px-4 mb-3;
}

.left-button {
  &::before {
    content: '<< ';
  }
}

.right-button {
  right: 0;

  @apply absolute;

  &::after {
    content: ' >>';
  }
}
</style>
