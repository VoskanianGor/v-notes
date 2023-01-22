<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

const dark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark-theme",
});
const toggle = useToggle(dark);

const onToggleTheme = () => toggle();
</script>

<template>
  <div>
    <button class="button" @click="onToggleTheme">
      <SunIcon v-if="dark" />
      <MoonIcon v-else />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.button {
  color: $c-text-secondary;
}
</style>
