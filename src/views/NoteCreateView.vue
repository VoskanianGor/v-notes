<script setup lang="ts">
import { ref, watch } from "vue";
import { useNoteStore } from "~stores/notes";
import { setLocal } from "~utils/local-storage";

const { addNote, notes } = useNoteStore();

watch(notes, () => {
  setLocal("notes", notes);
});

const title = ref("");
const onSubmit = (e: Event) => {
  e.preventDefault();

  addNote({
    id: Date.now(),
    title: title.value,
    todos: [],
  });

  title.value = "";
};
</script>
<template>
  <form @submit="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Submit</button>
  </form>
</template>
<style lang="scss"></style>
