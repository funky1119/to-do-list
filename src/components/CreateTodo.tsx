import { IFormData } from "../models/formData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryListState,
  categoryState,
  isCreateCategoryState,
  toDoState,
} from "../state/atorms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const isCreateCategory = useRecoilValue(isCreateCategoryState);
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const setCategoryList = useSetRecoilState(categoryListState);

  const handleValid = (data: IFormData) => {
    if (isCreateCategory) {
      setCategoryList((prev) => [
        {
          id: Date.now(),
          category: data.todo,
        },
        ...prev,
      ]);
      setValue("todo", "");
    } else {
      setToDos((prev) => [
        { id: Date.now(), text: data.todo, category },
        ...prev,
      ]);
      setValue("todo", "");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("todo", { required: "입력해 주세요." })}
        placeholder={`Write a ${isCreateCategory ? "category" : "to do"}`}
      />
      <Button>Add</Button>
    </form>
  );
}

export default CreateTodo;

const Input = styled.input`
  height: 30px;
  width: 230px;
  border-radius: 10px;
  padding: 0 10px;
  margin: 0 10px 0 20px;
  border-radius: 2px solid transparent;
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;

const Button = styled.button`
  height: 30px;
  width: 50px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;
