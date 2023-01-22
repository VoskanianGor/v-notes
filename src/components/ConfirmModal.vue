<script setup lang="ts">
import { defineProps, ref, Teleport } from "vue";
import Modal from "./Modal.vue";
import Button from "./ui/Button.vue";

interface IProps {
  show: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
  onClose: VoidFunction;
}

defineProps<IProps>();
</script>

<template>
  <Teleport to="#modals">
    <Modal :show="show" @close="onClose">
      <template #title>
        <h3 class="title">Are you sure you want to delete the note?</h3>
      </template>
      <template #body>
        <p class="description">
          This action cannot be undone. All the todos will be deleted as well.
        </p>
      </template>
      <template #footer>
        <div class="buttons-wrapper">
          <Button :onClickHandler="onCancel"> Cancel </Button>
          <Button :onClickHandler="onConfirm" kind="delete"> Delete </Button>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.title {
  font-size: 16px;
  font-weight: 700;
}

.description {
  font-size: 14px;
  color: $c-text-secondary;
}

.buttons-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}
</style>
