import { useRecoilValue } from "recoil";
import { toDoSelector } from "../state/atorms";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <Ul>
      {toDos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Ul>
  );
}

export default TodoList;

const Ul = styled.ul`
  margin: 20px 0;
`;
