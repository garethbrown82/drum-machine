<template>
  <StepSequencer v-bind:steps="steps" />
  <Controls v-bind:isPlaying="isPlaying" />
</template>

<script>
import StepSequencer from './components/StepSequencer'
import Controls from './components/Controls'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    StepSequencer,
    Controls,
  },
  setup() {
    let steps = ref([
      { id: 1, on: true },
      { id: 2, on: true },
      { id: 3, on: false },
      { id: 4, on: false },
      { id: 5, on: false },
      { id: 6, on: true },
      { id: 7, on: false },
      { id: 8, on: false },
    ])

    let isPlaying = ref(false)

    return {
      steps,
      isPlaying,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
