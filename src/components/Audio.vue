<template>
<div>
  <button v-on:click="playAudio">Play Audio</button>
</div>
</template>

<script>
import { playSineBlip } from '../audioUtilities/sineBlip'
export default {
  name: 'Audio',
  setup() {
    function playAudio() {
      playSineBlip()
    }

    return {
      playAudio,
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px;
}
</style>
