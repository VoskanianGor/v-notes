<script setup lang="ts">
import { useNoteStore } from "~stores/notes";
import Note from "~components/Note.vue";
import { nanoid } from "nanoid";
import { watch } from "vue";

const { notes, allTodos } = useNoteStore();
const onAdd = () => {
  notes.push({
    id: nanoid(),
    title: "New Note",
    todos: [],
  });
};

watch(notes, () => {
  console.log("notes changed");
});
</script>

<template>
  <main class="main">
    <h1 class="title">Your Notes</h1>
    <button @click="onAdd">add</button>
    <div class="notes">
      <p v-if="!notes.length">No Notes Yet</p>
      <Note v-for="note in allTodos" :key="note.id" :note="note" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.title {
  color: $c-text;
  font-weight: 500;
  font-size: 20px;
  padding-left: 15px;
  border-left: 3px $c-accent solid;
}
.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
}
</style>
