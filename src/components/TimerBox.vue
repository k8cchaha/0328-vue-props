<template>
  <h1>{{ num }}</h1>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  emits: {
    TimeOut: (num) => num.value === 0,
  },
  setup(props, { emit }) {
    const num = ref(5);
    let timer = null;

    onMounted(() => {
      timer = setInterval(() => {
        num.value--;
        if (num.value === 0) {
          emit("TimeOut", num);
          clearInterval(timer);
        }
      }, 1000);
    });
    return { num };
  },
};
</script>

<style scoped>
h1 {
  position: fixed;
  color: white;
  font-size: 50px;
  left: 50px;
  top: 50px;
}
</style>
