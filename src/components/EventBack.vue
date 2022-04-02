<template>
  <a @click="handleFn($event)" href="javascript:;">EVENT</a>
</template>

<script>
export default {
  setup() {
    const handleFn = (e) => {
      console.log(e.target);
    };
    return { handleFn };
  },
};
</script>

<style>
a {
  font-size: 50px;
}
</style>
