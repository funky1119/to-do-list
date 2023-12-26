import { useRecoilValue } from "recoil";
import { toDoState } from "../state/atorms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
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
