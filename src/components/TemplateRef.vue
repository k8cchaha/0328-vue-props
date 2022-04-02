<template>
  <input v-focus type="text" placeholder="Plz input" v-model="num" />
  <h1 v-price="num"></h1>
</template>

<script>
import { ref } from "@vue/reactivity";
// import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const aabb = ref(null);
    const num = ref(123123);
    // onMounted(() => {
    //   aabb.value.focus();
    // });

    return { aabb, num };
  },
};
</script>

<style></style>
