<script setup lang="ts">
import { ref, Transition } from "vue";
import CrossIcon from "./icons/CrossIcon.vue";
import { onClickOutside } from "@vueuse/core";

interface IProps {
  show: boolean;
}
defineProps<IProps>();

const emit = defineEmits(["close"]);
const modal = ref(null);

onClickOutside(modal, () => emit("close"));
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="mask">
      <div class="container" ref="modal">
        <div class="header">
          <slot name="title">
            <h2 class="title">Modal</h2>
          </slot>
          <button class="close" @click="emit('close')">
            <CrossIcon />
          </button>
        </div>
        <div class="body">
          <slot name="body"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000000, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  transition: opacity 0.3s ease;
}

.container {
  width: min(100%, 400px);
  margin: auto;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: $c-background;
  transition: $transition;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;

  .close {
    flex: 0 0 15px;
    color: $c-text-secondary;
  }
}

.body {
  margin-bottom: 30px;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
