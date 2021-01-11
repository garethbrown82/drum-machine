<template>
  <StepSequencer
    v-bind:steps="steps"
    v-on:step-selected="toggleStepOn"
  />
  <Controls
    v-bind:isPlaying="isPlaying"
    v-on:play-sequence="playSequence"
    v-on:stop-sequence="stopSequence"
  />
  <Audio />
</template>

<script>
import StepSequencer from './components/StepSequencer'
import Controls from './components/Controls'
import Audio from './components/Audio'
import { ref, watch } from 'vue'
import { playSineBlip } from './audioUtilities/sineBlip'

export default {
  name: 'App',
  components: {
    StepSequencer,
    Controls,
    Audio,
  },
  setup() {
    let steps = ref([
      { id: 1, on: true, isTriggering: false },
      { id: 2, on: true, isTriggering: false },
      { id: 3, on: false, isTriggering: false },
      { id: 4, on: false, isTriggering: false },
      { id: 5, on: false, isTriggering: false },
      { id: 6, on: true, isTriggering: false },
      { id: 7, on: false, isTriggering: false },
      { id: 8, on: false, isTriggering: false },
    ])

    let stepperInterval = ref({})

    let isPlaying = ref(false)

    function toggleStepOn(id) {
      const stepIndex = steps.value.findIndex((step) => step.id === id)
      steps.value[stepIndex].on = !steps.value[stepIndex].on
    }

    function playSequence() {
      isPlaying.value = true
    }

    function stopSequence() {
      isPlaying.value = false
    }

    function handleStep() {
      const triggeringIndex = steps.value.findIndex((step) => step.isTriggering)
      if(steps.value[triggeringIndex].on) {
        playSineBlip()
      }
      steps.value[triggeringIndex].isTriggering = false

      if (triggeringIndex+1 < steps.value.length) {
        steps.value[triggeringIndex+1].isTriggering = true
      } else {
        steps.value[0].isTriggering = true
      }
    }

    watch(isPlaying, (isPlaying, prevIsPlaying) => {
      if (isPlaying && !prevIsPlaying) {
        steps.value[0].isTriggering = true
        stepperInterval.value = setInterval(() => {
          handleStep()
        }, 200)
      } else {
        clearInterval(stepperInterval.value)
        const triggeringIndex = steps.value.findIndex((step) => step.isTriggering)
        steps.value[triggeringIndex].isTriggering = false
      }
    })

    return {
      steps,
      isPlaying,
      playSequence,
      stopSequence,
      toggleStepOn,
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
