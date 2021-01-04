<template>
  <div
    class="grid-step"
    v-bind:class="{ on: step.on }"
  />
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: Object,
  }
}
</script>

<style scoped>
  .grid-step {
    width: 50px;
    height: 50px;
    margin: 10px;
    border: solid 1px black;
  }

  .on {
    background-color: blue;
  }
</style>
