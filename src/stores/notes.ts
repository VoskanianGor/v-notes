import { defineStore } from "pinia";
import type { INote } from "~interfaces/i-note";
import type { ITodo } from "~interfaces/i-todo";
import { useStorage, useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import { getLocal } from "~utils/local-storage";

const initialNotes = getLocal<INote[]>("notes") || [
  {
    id: "1",
    title: "Note 1",
    todos: [
      {
        id: "1",
        title: "Todo 1",
        completed: true,
      },
      {
        id: "2",
        title: "React",
        completed: false,
      },
    ],
  },
];

export const useNoteStore = defineStore("notes", () => {
  const notes = useLocalStorage<INote[]>("notes", initialNotes);

  const allTodos = computed(() => notes);

  const addNote = (note: INote) => {
    notes.value.push(note);
  };

  const removeNote = (noteId: string) => {
    notes.value = notes.value.filter((n) => n.id !== noteId);
  };

  const addTodo = (noteId: string, todo: ITodo) => {
    const note = notes.value.find((n) => n.id === noteId);

    if (note) {
      note.todos = note.todos || [];
      note.todos.push(todo);
    }
  };

  const removeTodo = (noteId: string, todoId: string) => {
    const note = notes.value.find((n) => n.id === noteId);

    if (note) {
      note.todos = note.todos || [];
      note.todos = note.todos.filter((t) => t.id !== todoId);
    }
  };

  return { notes, addNote, removeNote, addTodo, removeTodo, allTodos };
});
