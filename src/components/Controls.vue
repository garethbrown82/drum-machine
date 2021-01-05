<template>
  <button
    class="play-button"
    v-bind:class="{ active: isPlaying }"
    v-on:click="$emit('play-sequence')"
  >Play</button>
  <button
    class="stop-button"
    v-bind:class="{ active: !isPlaying }"
    v-on:click="$emit('stop-sequence')"
  >Stop</button>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    isPlaying: Boolean,
  },
  emits: ['play-sequence', 'stop-sequence']
}
</script>

<style scoped>
  .play-button.active {
    background-color: green;
  }
  
  .stop-button.active {
    background-color: red;
  }
</style>
