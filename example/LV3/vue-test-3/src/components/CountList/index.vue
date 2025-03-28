<script>
import { ref } from "vue";
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  setup(props) {
    const listIdx = ref(2)
    return { listIdx, props }
  },
};
</script>

<template>
  <div style="border: 2px solid coral; margin: 2rem; padding: 2rem; border-radius: 1rem">
    <h1>目前的人數是{{ listIdx }}人</h1>
    <h2>存款有{{ props.count }}元</h2>
  </div>
</template>

<style></style>
