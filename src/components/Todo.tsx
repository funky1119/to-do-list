import { useSetRecoilState } from "recoil";
import { IToDo, CATEGORY } from "../models/toDo";
import { deleteTodoState, toDoState } from "../state/atorms";
import styled from "styled-components";
import { ChangeEvent } from "react";

function Todo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const setDeleteTodo = useSetRecoilState(deleteTodoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as CATEGORY };
      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;

    if (checked) {
      // 체크 될 경우 삭제 목록
      setDeleteTodo((prev) => [...prev, value]);
    } else {
      // 해제 할 경우 삭제 취소
      setDeleteTodo((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <Li>
      <Label>
        <CheckBox type="checkbox" value={id} onChange={onChange} />
        <Text> {text}</Text>
      </Label>
      {category !== CATEGORY.DOING && (
        <Button name={CATEGORY.DOING} onClick={onClick}>
          Doing
        </Button>
      )}
      {category !== CATEGORY.TO_DO && (
        <Button name={CATEGORY.TO_DO} onClick={onClick}>
          To Do
        </Button>
      )}
      {category !== CATEGORY.DONE && (
        <Button name={CATEGORY.DONE} onClick={onClick}>
          Done
        </Button>
      )}
    </Li>
  );
}

export default Todo;

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

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: 0 0 10px rgba(245, 151, 29, 0.8); /* 형광 효과를 주는 box-shadow 설정 */
  transition: box-shadow 0.3s ease; /* 효과가 적용될 때 부드럽게 전환되도록 설정 */
  margin-right: 3px;
  height: 30px;
  font-weight: 600;

  &:hover {
    box-shadow: 0 0 20px rgba(245, 151, 29, 1); /* 호버 시 더 강한 형광 효과 */
  }
`;
