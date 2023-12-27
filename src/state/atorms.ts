import { atom, selector } from "recoil";
import { CATEGORY, IToDo } from "../models/toDo";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "toDo",
  storage: localStorage,
});

export const categoryState = atom<CATEGORY>({
  key: "category",
  default: CATEGORY.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
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
