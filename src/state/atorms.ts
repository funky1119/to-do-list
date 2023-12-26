import { atom } from "recoil";
import { IToDo } from "../models/toDo";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
