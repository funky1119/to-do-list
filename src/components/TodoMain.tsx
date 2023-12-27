import CreateTodo from "./CreateTodo";
import styled from "styled-components";
import CategorySelect from "./CategorySelect";
import DeleteTodo from "./DeleteTodo";
import CreateCategory from "./CreateCategory";
import TodoList from "./TodoList";
import { useRecoilValue } from "recoil";
import { isCreateCategoryState } from "../state/atorms";
import CategoryList from "./CategoryList";

function TodoMain() {
  const isCreateCategory = useRecoilValue(isCreateCategoryState);

  return (
    <Container>
      <Title>To Dos</Title>
      <hr />
      <Wrapper>
        <TodoActionForm>
          {!isCreateCategory && <CategorySelect />}
          <CreateTodo />
          <DeleteTodo />
        </TodoActionForm>
        <CreateCategory />
        {isCreateCategory ? <CategoryList /> : <TodoList />}
      </Wrapper>
    </Container>
  );
}

export default TodoMain;

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
  width: auto;
`;

const TodoActionForm = styled.div`
  display: flex;
`;
