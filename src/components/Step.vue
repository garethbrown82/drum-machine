<template>
  <div
    class="grid-step"
    v-bind:class="{
      on: step.on,
      triggering: step.isTriggering
    }"
    v-on:click="$emit('step-clicked', step.id)"
  />
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: Object,
  },
  emits: ['step-clicked']
}
</script>

<style scoped>
  .grid-step {
    width: 50px;
    height: 50px;
    margin: 10px;
    border: solid 5px white;
    background-color: lightgray;
  }

  .on {
    background-color: blue;
  }

  .triggering {
    border: solid 5px green;
  }
</style>
