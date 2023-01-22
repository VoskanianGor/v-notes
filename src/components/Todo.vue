<script setup lang="ts">
import { defineProps, ref } from "vue";
import TrashIcon from "~components/icons/TrashIcon.vue";
import type { ITodo } from "~interfaces/i-todo";
import { useNoteStore } from "~stores/notes";
import CheckIcon from "./icons/CheckIcon.vue";
import PencilIcon from "./icons/PencilIcon.vue";

interface IProps {
  todo: ITodo;
  noteId: string;
  isEdit?: boolean;
}

const { todo, noteId } = defineProps<IProps>();
const { removeTodo } = useNoteStore();

const isTodoEdit = ref(false);
const toggleIsTodoEdit = () => {
  isTodoEdit.value = !isTodoEdit.value;
};
</script>

<template>
  <div class="todo">
    <input
      v-if="isEdit"
      class="checkbox"
      type="checkbox"
      name="checkbox"
      id="checkbox"
      v-model="todo.completed"
    />
    <input
      v-if="isTodoEdit"
      class="title edit"
      type="text"
      v-model="todo.title"
    />
    <h2 v-else class="title" :class="{ done: todo.completed }">
      {{ todo.title }}
    </h2>
    <div class="controls">
      <button v-if="isEdit" class="control" @click="toggleIsTodoEdit">
        <PencilIcon v-if="!isTodoEdit" />
        <CheckIcon v-else />
      </button>
      <button
        v-if="isEdit"
        class="control delete"
        @click="removeTodo(noteId, todo.id)"
      >
        <TrashIcon />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid $c-border;
  padding: 8px 15px;
  width: 80%;
  margin-inline: auto;

  & + & {
    margin-top: 15px;
  }
}

.title {
  font-size: 14px;
  transition: $transition;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &.edit {
    background-color: transparent;
    border: none;
  }

  &.done {
    text-decoration: line-through;
    opacity: 0.5;
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 7px;
}

.control {
  display: flex;
  cursor: pointer;
  transition: $transition;
  color: $c-text-secondary;

  &:hover {
    color: $c-accent;
  }
}

.delete {
  &:hover {
    color: $c-error;
  }
}
.checkbox {
  accent-color: $c-accent;
}
</style>
