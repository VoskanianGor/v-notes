<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ArrowLeft from "~components/icons/ArrowLeft.vue";
import Note from "~components/Note.vue";
import { useNoteStore } from "~stores/notes";
import { setLocal } from "~utils/local-storage";

const { notes } = useNoteStore();
const { back } = useRouter();
const { params } = useRoute();
const noteId = computed(() => params.id);

const note = computed(() => notes.find((note) => note.id === +noteId.value));

watch(notes, () => {
  setLocal("notes", notes);
});
</script>

<template>
  <main class="main">
    <div>
      <button class="back" @click="back">
        <ArrowLeft />
      </button>
    </div>
    <h1 v-if="!note">Note with id {{ noteId }} not found</h1>
    <Note v-else :note="note" :is-edit="true" />
  </main>
</template>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.back {
  width: 40px;
  height: 40px;
}
</style>
