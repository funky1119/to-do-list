import { useRecoilValue } from "recoil";
import { toDoSelector } from "../state/atorms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import styled from "styled-components";
import CategorySelect from "./CategorySelect";
import DeleteTodo from "./DeleteTodo";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <Container>
      <Title>To Dos</Title>
      <hr />
      <Wrapper>
        <TodoActionForm>
          <CategorySelect />
          <CreateTodo />
          <DeleteTodo />
        </TodoActionForm>
        <Ul>
          {toDos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </Ul>
      </Wrapper>
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 580px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  padding: 20px 0 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoActionForm = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  margin: 20px 0;
`;
