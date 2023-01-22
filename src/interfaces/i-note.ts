import type { ITodo } from "./i-todo";

export interface INote {
  id: string;
  title: string;
  todos?: ITodo[];
}
