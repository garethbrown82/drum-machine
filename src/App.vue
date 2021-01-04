<template>
  <StepSequencer v-bind:steps="steps" />
</template>

<script>
import StepSequencer from './components/StepSequencer'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    StepSequencer,
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

    return {
      steps
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
