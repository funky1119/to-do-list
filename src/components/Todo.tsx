import { useSetRecoilState } from "recoil";
import { IToDo, CATEGORY } from "../models/toDo";
import { toDoState } from "../state/atorms";

function Todo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
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
  return (
    <li>
      {text}
      {category !== CATEGORY.DOING && (
        <button name={CATEGORY.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== CATEGORY.TO_DO && (
        <button name={CATEGORY.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== CATEGORY.DONE && (
        <button name={CATEGORY.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
