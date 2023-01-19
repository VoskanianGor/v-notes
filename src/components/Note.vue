<script setup lang="ts">
import { defineProps } from "vue";
import CrossIcon from "./icons/CrossIcon.vue";
import EditIcon from "./icons/EditIcon.vue";
import Todo from "./Todo.vue";

interface INote {
  id: number;
  title: string;
  todos?: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}

interface INoteProps {
  note: INote;
  controls?: boolean;
}

withDefaults(defineProps<INoteProps>(), {
  controls: true,
});

const deleteNote = () => {
  console.log("delete");
};
</script>

<template>
  <section class="note">
    <div class="heading">
      <h2 class="title">{{ note.title }}</h2>
      <div class="controls" v-if="controls">
        <RouterLink
          class="control"
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
      :controls="true"
    />
  </section>
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

  &:hover {
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
