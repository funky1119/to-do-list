import { IFormData } from "../models/formData";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../state/atorms";
import { CATEGORY } from "../models/toDo";
import { useForm } from "react-hook-form";

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = (data: IFormData) => {
    setToDos((prev) => [
      { id: Date.now(), text: data.todo, category: CATEGORY.DOING },
      ...prev,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "할 일을 작성해주세요" })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;