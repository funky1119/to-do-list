import { IFormData } from "../models/formData";
import { useRecoilState, useSetRecoilState } from "recoil";
import { deleteTodoState, toDoState } from "../state/atorms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function DeleteTodo() {
  const { handleSubmit } = useForm<IFormData>();
  const setToDos = useSetRecoilState(toDoState);
  const [deleteTodo, setDeleteTodo] = useRecoilState(deleteTodoState);

  const handleValid = (data: IFormData) => {
    setToDos((prev) =>
      prev.filter((item) => !deleteTodo.includes(item.id.toString()))
    );
    setDeleteTodo([]);
  };
  console.log(deleteTodo.length);

  return (
    <>
      {deleteTodo.length > 0 && (
        <form onSubmit={handleSubmit(handleValid)}>
          <Button>Delete</Button>
        </form>
      )}
    </>
  );
}

export default DeleteTodo;

const Button = styled.button`
  margin-left: 10px;
  height: 30px;
  width: 60px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;
