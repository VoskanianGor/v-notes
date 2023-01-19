<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Note from "~components/Note.vue";
import { useNoteStore } from "~stores/notes";

const { notes } = useNoteStore();
const { back } = useRouter();
const { params } = useRoute();
const noteId = computed(() => params.id);

const note = computed(() => notes.find((note) => note.id === +noteId.value));
</script>

<template>
  <header>
    <button @click="back">Back</button>
  </header>
  <div>EDIT {{ noteId }}</div>
  <h1 v-if="!note">Note with id {{ noteId }} not found</h1>
  <Note v-else :note="note" :controls="false" />
</template>
