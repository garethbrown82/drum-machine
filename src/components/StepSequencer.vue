<template>
  <div class="steps-wrapper">
    <Step
      v-for="step in steps"
      v-bind:key="step"
      v-bind:step="step"
    />
  </div>
  <div>Steps here</div>
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
  }
</style>