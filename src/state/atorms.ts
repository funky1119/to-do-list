import { atom, selector } from "recoil";
import { CATEGORY, ICategory, IToDo } from "../models/toDo";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist({
//   key: "toDo",
//   storage: localStorage,
// });

export const categoryListState = atom<ICategory[]>({
  key: "categoryList",
  default: [
    { id: 1, category: CATEGORY.DOING },
    { id: 2, category: CATEGORY.DONE },
    { id: 3, category: CATEGORY.TO_DO },
  ],
});

export const isCreateCategoryState = atom({
  key: "isCreateCategory",
  default: false,
});

export const categoryState = atom<CATEGORY | string>({
  key: "category",
  default: CATEGORY.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

export const deleteTodoState = atom<string[]>({
  key: "deleteTodo",
  default: [],
});

export const deleteCategoryState = atom<string[]>({
  key: "deleteCategory",
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
