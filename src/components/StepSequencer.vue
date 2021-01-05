<template>
  <div class="steps-wrapper">
    <Step
      v-for="step in steps"
      v-bind:key="step"
      v-bind:step="step"
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
