export enum CATEGORY {
  DOING = "DOING",
  DONE = "DONE",
  TO_DO = "TO_DO",
}

export interface categories {
  value: string;
  // vlaue: Record<string, string>;
}

export interface IToDo {
  id: number;
  text: string;
  category: CATEGORY | string;
}

export interface ICategory {
  id: number;
  category: CATEGORY | string;
}
