import { useRecoilState, useRecoilValue } from "recoil";
import { CATEGORY } from "../models/toDo";
import { categoryListState, categoryState } from "../state/atorms";
import styled from "styled-components";

function CategorySelect() {
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryList = useRecoilValue(categoryListState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <Select value={category} onInput={onInput}>
      {categoryList.map((item) => (
        <Option key={item.id} value={item.category}>
          {item.category}
        </Option>
      ))}
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
