<script >
// import { ref } from "vue";
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<template>
  <div style="border: 2px solid coral; margin: 2rem; padding: 2rem;border-radius: 1rem">
    <div v-show="isOpen" class="box_data"></div>
  </div>
</template>

<style scoped>
.box_data {
  width: 200px;
  height: 200px;
  background-color: blue;
  margin: 0 auto;
}
</style>
