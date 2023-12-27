import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryListState,
  deleteCategoryState,
  toDoSelector,
} from "../state/atorms";
import styled from "styled-components";
import { ChangeEvent } from "react";
import { CATEGORY } from "../models/toDo";

function CategoryList() {
  const categoryList = useRecoilValue(categoryListState);
  const setDeleteCategory = useSetRecoilState(deleteCategoryState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.currentTarget;
    if (checked) setDeleteCategory((prev) => [...prev, value]);
    else setDeleteCategory((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Ul>
      {categoryList.map((item) => (
        <Li key={item.id}>
          <Label htmlFor={`${item.id}`}>
            <Text> {item.category}</Text>
            {![CATEGORY.DOING, CATEGORY.DONE, CATEGORY.TO_DO].includes(
              item.category as CATEGORY
            ) && (
              <CheckBox type="checkbox" value={item.id} onChange={onChange} />
            )}
          </Label>
        </Li>
      ))}
    </Ul>
  );
}

export default CategoryList;

const Ul = styled.ul`
  margin: 20px 0;
`;

const Li = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 25%;
  border: 1px solid #ddd;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;

  &:checked {
    background-color: ${(props) => props.theme.iconButton};
    border: none;
    &::after {
      display: block;
      content: "✔️";
      text-align: center;
      color: white;
    }
  }
`;

const Text = styled.span`
  display: inline-flex;
  margin-right: 10px;
  width: 20vw;
  max-width: 400px;
  height: auto;
  background-color: ${(props) => props.theme.textColor};
  color: #000;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 5px;
  align-items: center;
  border-radius: 5px;
  word-break: break-all; /* 줄 바꿈 설정 */
`;
