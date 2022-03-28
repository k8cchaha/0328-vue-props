<template>
  <PropsTest :msg="data" />
  <TitleBar :handListShow="HandListShow" />
  <ListItem :isOpen="isOpen" />
  <EmitTest @hihi="handleCallBack" />
</template>

<script>
import PropsTest from "@/components/PropsTest.vue";
import TitleBar from "@/components/TitleBar.vue";
import ListItem from "@/components/ListItem.vue";
import EmitTest from "@/components/EmitTest.vue";

import { ref } from "@vue/reactivity";
export default {
  name: "App",
  components: {
    PropsTest,
    TitleBar,
    ListItem,
    EmitTest,
  },
  setup() {
    const data = ref("Hello Alex!");
    const isOpen = ref(true);

    const HandListShow = () => {
      isOpen.value = !isOpen.value;
    };

    const handleCallBack = (num) => {
      console.log("CallBack:", num);
    };

    return { data, isOpen, HandListShow, handleCallBack };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
