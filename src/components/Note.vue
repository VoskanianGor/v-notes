<script setup lang="ts">
import { defineProps, ref, Teleport } from "vue";
import { RouterLink } from "vue-router";
import type { INote } from "~interfaces/i-note";
import CrossIcon from "./icons/CrossIcon.vue";
import EditIcon from "./icons/EditIcon.vue";
import Todo from "./Todo.vue";
import Modal from "./Modal.vue";

interface INoteProps {
  note: INote;
  isEdit?: boolean;
}

withDefaults(defineProps<INoteProps>(), {
  isEdit: false,
});

const deleteNote = () => {
  showModal.value = true;
  console.log("delete");
};

const showModal = ref(false);
</script>

<template>
  <section class="note">
    <div class="heading">
      <h2 class="title">{{ note.title }}</h2>
      <div class="controls">
        <RouterLink
          class="control"
          v-if="!isEdit"
          :to="{ name: 'edit', params: { id: note.id } }"
        >
          <EditIcon />
        </RouterLink>
        <button class="control delete" @click="deleteNote">
          <CrossIcon />
        </button>
      </div>
    </div>
    <Todo
      v-if="note.todos?.length"
      v-for="todo in note.todos"
      :key="todo.id"
      :todo="todo"
      :noteId="note.id"
      :isEdit="isEdit"
    />
  </section>

  <Teleport to="#modals">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </Modal>
  </Teleport>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.title {
  color: $c-text;
  font-weight: 700;
  font-style: italic;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.note {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid $c-border;
  padding: 15px;
  border-radius: 10px;
  width: min(100%, 400px);
  transition: $transition;

  &:hover {
    box-shadow: 0 0 15px 0 var(--green4);
    .controls {
      opacity: 1;
    }
  }
}

.heading {
  display: flex;
  justify-content: space-between;
}

.controls {
  display: flex;
  gap: 7px;
  opacity: 0;
  transition: $transition;

  .control {
    display: flex;
    color: $c-text-secondary;
    transition: $transition;
    cursor: pointer;

    &:hover {
      color: $c-accent-hover;
    }
  }

  .delete {
    &:hover {
      color: $c-error;
    }
  }
}
</style>
