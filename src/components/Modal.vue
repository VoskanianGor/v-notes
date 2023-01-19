<script setup lang="ts">
import { ref, Transition } from "vue";
import { useOnClickOutside } from "~hooks/use-click-outside";

const emit = defineEmits(["close"]);
defineProps({
  show: Boolean,
});

const modal = ref(null);

useOnClickOutside(modal, () => emit("close"));
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="mask">
      <div class="modal-container" ref="modal">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.mask {
  --mask-bg: var(--slate12);
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

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: $c-background;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(var(--slate12), 0.33);
  transition: $transition;
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
