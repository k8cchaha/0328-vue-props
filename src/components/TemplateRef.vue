<template>
  <input ref="aabb" type="text" placeholder="Plz input" />
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const aabb = ref(null);
    onMounted(() => {
      aabb.value.focus();
    });

    return { aabb };
  },
};
</script>

<style></style>
