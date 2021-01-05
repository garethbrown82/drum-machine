<template>
  <button v-bind:class="{ active: isPlaying }">Play</button>
  <button v-bind:class="{ active: !isPlaying }">Stop</button>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    isPlaying: Boolean,
  }
}
</script>

<style scoped>
  button.active {
    background-color: green;
  }
</style>
