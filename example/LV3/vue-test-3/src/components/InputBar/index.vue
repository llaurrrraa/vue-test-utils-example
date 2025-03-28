<script>
import { computed, ref } from "vue";
export default {
  props: {
    thousand: {
      type: String,
      default: "1000",
    },
  },
  setup(props) {
    // const a = ref(2000);
    const num = computed(() =>
      props.thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
    return {
      // a,
      num,
    };
  },
};
</script>
<template>
  <div style="border: 2px solid coral; margin: 2rem; padding: 2rem;border-radius: 1rem">
    <ul>
      <li>
        name:
        <input class="name" type="text" placeholder="輸入名字" />
      </li>
      <li>
        email:
        <input class="email" type="text" placeholder="輸入email" />
      </li>
      <li>
        num
        <input class="num" type="text" :value="num" disabled />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: block;
  margin-bottom: 20px;
  list-style-type: none;
}
li {
  margin-bottom: 10px;
  font-size: 22px;
}
input {
  font-size: 22px;
  height: 30px;
}
</style>
