<template>
  <button @click="handClick">Click</button>
  <button @click="handScale">Click</button>
  <transition name="fade">
    <div class="box" v-if="isAnim">YO</div>
  </transition>
  <transition name="fade2">
    <div class="box2" v-if="isScale">YO</div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isAnim = ref(false);
    const isScale = ref(false);

    const handClick = () => {
      isAnim.value = !isAnim.value;
    };

    const handScale = () => {
      isScale.value = !isScale.value;
    };

    return { isAnim, isScale, handClick, handScale };
  },
};
</script>

<style scoped>
.box {
  position: fixed;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 100px;
  background-color: red;
}
.box2 {
  position: fixed;
  top: 100px;
  left: 300px;
  width: 100px;
  height: 100px;
  background-color: blue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade2-enter-active {
  animation: bounce-in 0.5s;
}
.fade2-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
