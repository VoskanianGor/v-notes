<script setup lang="ts">
import { defineProps, ref } from "vue";

interface IProps {
  onClickHandler: VoidFunction;
  kind?: "primary" | "secondary" | "delete" | "confirm";
}

withDefaults(defineProps<IProps>(), {
  kind: "primary",
});
</script>

<template>
  <button class="button" :class="kind" @click="onClickHandler">
    <slot />
  </button>
</template>

<style lang="scss">
@import "~styles/variables.scss";

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  border-radius: 5px;
  font-weight: 700;
  transition: $transition;

  &.primary {
    background-color: var(--gray4);
    color: var(--gray11);

    &:hover {
      background-color: var(--gray5);
    }
  }

  &.secondary {
    background-color: $c-background;
    color: $c-text;
  }

  &.delete {
    background-color: var(--red4);
    color: var(--red11);

    &:hover {
      background-color: var(--red5);
    }
  }
}
</style>
