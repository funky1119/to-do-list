import { IFormData } from "../models/formData";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryListState,
  deleteCategoryState,
  deleteTodoState,
  isCreateCategoryState,
  toDoState,
} from "../state/atorms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function DeleteTodo() {
  const { handleSubmit } = useForm<IFormData>();
  const setToDos = useSetRecoilState(toDoState);
  const setCategoryList = useSetRecoilState(categoryListState);
  const [deleteTodo, setDeleteTodo] = useRecoilState(deleteTodoState);
  const isCreateCategory = useRecoilValue(isCreateCategoryState);
  const [deleteCategory, setDeleteCategory] =
    useRecoilState(deleteCategoryState);

  const isDeleteButton = deleteTodo.length > 0 || deleteCategory.length > 0;

  const handleValid = (data: IFormData) => {
    if (isCreateCategory) {
      setCategoryList((prev) =>
        prev.filter((item) => !deleteCategory.includes(item.id.toString()))
      );
      setDeleteCategory([]);
    } else {
      setToDos((prev) =>
        prev.filter((item) => !deleteTodo.includes(item.id.toString()))
      );
      setDeleteTodo([]);
    }
  };

  return (
    <>
      {isDeleteButton && (
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
