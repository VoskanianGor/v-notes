import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { INote } from "~interfaces/i-note";
import type { ITodo } from "~interfaces/i-todo";
import { getLocal, setLocal } from "~utils/local-storage";

const initialNotes = getLocal<INote[]>("notes") || [
  {
    id: 1,
    title: "Note 1",
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: true,
      },
      {
        id: 2,
        title: "React",
        completed: false,
      },
    ],
  },
];

export const useNoteStore = defineStore("note", () => {
  const notes = ref<INote[]>(initialNotes);

  const addNote = (note: INote) => {
    notes.value.push(note);
  };

  const removeNote = (noteId: number) => {
    notes.value = notes.value.filter((n) => n.id !== noteId);
  };

  const addTodo = (noteId: number, todo: ITodo) => {
    const note = notes.value.find((n) => n.id === noteId);

    if (note) {
      note.todos = note.todos || [];
      note.todos.push(todo);
    }
  };

  const removeTodo = (noteId: number, todoId: number) => {
    const note = notes.value.find((n) => n.id === noteId);

    if (note) {
      note.todos = note.todos || [];
      note.todos = note.todos.filter((t) => t.id !== todoId);
    }
  };

  return { notes, addNote, removeNote, addTodo, removeTodo };
});
