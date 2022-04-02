import { createApp } from "vue";
import App from "./App.vue";
import { numPrice } from "./lib/tools";

const app = createApp(App);

app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.directive("price", {
  mounted(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
  updated(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
});

app.mount("#app");
