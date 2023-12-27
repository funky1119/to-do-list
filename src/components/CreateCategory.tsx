import { IFormData } from "../models/formData";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  deleteCategoryState,
  deleteTodoState,
  isCreateCategoryState,
} from "../state/atorms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function CreateCategory() {
  const { handleSubmit } = useForm<IFormData>();
  const [isCreateCategory, setIsCreateCategory] = useRecoilState(
    isCreateCategoryState
  );
  const setDeleteTodo = useSetRecoilState(deleteTodoState);
  const setDeleteCategory = useSetRecoilState(deleteCategoryState);
  const handleValid = () => {
    setIsCreateCategory((prev) => !prev);
    setDeleteTodo([]);
    setDeleteCategory([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <Button>{isCreateCategory ? "Create to do" : "Create category"}</Button>
      </form>
    </>
  );
}

export default CreateCategory;

const Button = styled.button`
  margin: 10px;
  height: 30px;
  width: 25vw;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;
