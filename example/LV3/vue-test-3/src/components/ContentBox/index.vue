<script>
// const props = defineProps({
//   isOpen: {
//     type: Boolean,
//     default: true,
//   }
// })
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <div style="border: 2px solid blueviolet; margin: 2rem; padding: 2rem; border-radius: 1rem;">
    <div v-show="props.isOpen" class="box"></div>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 0 auto;
}
</style>
