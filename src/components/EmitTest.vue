<template>
  <h1>{{ num }}</h1>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  props: {},
  emits: {
    hihi: (num) => {
      return num.value === 0;
    },
  },
  setup(props, { emit }) {
    const num = ref(0);

    onMounted(() => {
      emit("hihi", num);
    });

    return { num };
  },
};
</script>

<style></style>
