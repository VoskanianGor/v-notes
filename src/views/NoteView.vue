<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import { useNoteStore } from "~stores/notes";
import Note from "~components/Note.vue";
import { setLocal } from "~utils/local-storage";

const { notes } = useNoteStore();

watch(notes, () => {
  setLocal("notes", notes);
});
</script>

<template>
  <main class="main">
    <h1 class="title">Your Notes</h1>
    <div class="notes">
      <p v-if="!notes.length">No Notes Yet</p>
      <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.main {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  margin-inline: center;
}
</style>
