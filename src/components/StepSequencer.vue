<template>
  <div class="steps-wrapper">
    <Step
      v-for="step in steps"
      v-bind:key="step"
      v-bind:step="step"
      v-on:step-clicked="selectStep"
    />
  </div>
</template>

<script>
import Step from './Step'

export default {
  name: 'StepSequencer',
  components: {
    Step,
  },
  props: {
    steps: Array,
  },
  setup(props, { emit }) {
    function selectStep(id) {
      emit('step-selected', id)
    }

    return {
      selectStep,
    }
  }
}
</script>

<style scoped>
  .steps-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
  }
</style>
