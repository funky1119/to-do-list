export enum CATEGORY {
  DOING = "DOING",
  DONE = "DONE",
  TO_DO = "TO_DO",
}

export interface IToDo {
  id: number;
  text: string;
  category: "DOING" | "TO_DO" | "DONE";
}
