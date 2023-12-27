import { atom, selector } from "recoil";
import { CATEGORY, IToDo } from "../models/toDo";

export const categoryState = atom<CATEGORY>({
  key: "category",
  default: CATEGORY.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const deleteTodoState = atom<string[]>({
  key: "deleteTodo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
