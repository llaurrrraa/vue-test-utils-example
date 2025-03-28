<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const idx = ref(0);

    const add = () => {
      idx.value++;
    };
    const remove = () => {
      idx.value--;
    };

    return { idx, add, remove };
  },
};
</script>
<template>
  <div style="border: 2px solid blueviolet; margin: 2rem; padding: 2rem; border-radius: 1rem">
    <h1 class="count_title">{{ idx }}</h1>
    <div class="btn-box">
      <button id="add" class="add_btn" @click="add">add 按鈕</button>
      <button id="remove" class="remove_btn" @click="remove">remove 按鈕</button>
    </div>
  </div>
</template>

<style scoped>
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto 20px auto;
}
</style>
