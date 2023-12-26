import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../state/atorms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { CATEGORY } from "../models/toDo";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as CATEGORY);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={CATEGORY.TO_DO}>To Do</option>
        <option value={CATEGORY.DOING}>Doing</option>
        <option value={CATEGORY.DONE}>Done</option>
      </select>
      <CreateTodo />
      <ul>
        {toDos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
