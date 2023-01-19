import type { ITodo } from "./i-todo";

export interface INote {
  id: number;
  title: string;
  todos?: ITodo[];
}
