<template>
  <h2>{{ props.msg }}</h2>
</template>

<script>
export default {
  props: ["msg"],
  setup(props) {
    return { props };
  },
};
</script>

<style scoped>
h2 {
  color: blue;
  font: 50px;
}
</style>
