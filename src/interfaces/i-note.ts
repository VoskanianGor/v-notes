export interface INote {
  title: string;
  todos?: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
