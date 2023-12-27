import { useRecoilState } from "recoil";
import { CATEGORY } from "../models/toDo";
import { categoryState } from "../state/atorms";
import styled from "styled-components";

function CategorySelect() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as CATEGORY);
  };

  return (
    <Select value={category} onInput={onInput}>
      <Option value={CATEGORY.TO_DO}>To Do</Option>
      <Option value={CATEGORY.DOING}>Doing</Option>
      <Option value={CATEGORY.DONE}>Done</Option>
    </Select>
  );
}

export default CategorySelect;

const Select = styled.select`
  height: 30px;
  width: auto;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  border: 2px solid transparent; /* 테두리는 투명으로 설정 */
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;

const Option = styled.option``;
