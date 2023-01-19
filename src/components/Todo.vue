<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import TrashIcon from "~components/icons/TrashIcon.vue";
import type { ITodo } from "~interfaces/i-note";
import { useNoteStore } from "~stores/notes";

interface IProps {
  todo: ITodo;
  noteId: number;
  controls?: boolean;
}

const { todo, noteId } = defineProps<IProps>();
const { removeTodo } = useNoteStore();
</script>

<template>
  <div class="todo">
    <h2 class="title" :class="{ done: todo.completed }">
      {{ todo.title }}
    </h2>
    <div class="controls" v-if="controls">
      <input
        class="checkbox"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        v-model="todo.completed"
      />
      <button class="delete" @click="removeTodo(noteId, todo.id)">
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

  &.done {
    text-decoration: line-through;
    opacity: 0.5;
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.delete {
  display: flex;
  cursor: pointer;
  transition: $transition;

  &:hover {
    color: $c-error;
  }
}
.checkbox {
  accent-color: $c-accent;
}
</style>
