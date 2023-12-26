import { useState } from "react";
import { useForm } from "react-hook-form";
function TodoList() {
  /**
   * handleSubmit => 1번째 인자: 데이터가 유효했을때 호출되는 함수
   *                 2번째 인자: 데이터가 유효하지 않을 때 호출되는 함수
   */
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {};

  console.log("formState", formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", { required: "이메일 입력 필요" })}
          placeholder="Write a email"
        />
        <input
          {...register("userName", {
            required: "사용자명을 입력",
            minLength: { value: 5, message: "최소 5자 이상 입력" },
          })}
          placeholder="Write a userName"
        />
        <input
          {...register("phoneNumber", { required: true })}
          placeholder="Write a phoneNumber"
        />
        <input
          {...register("password", { required: true })}
          placeholder="Write a password"
        />
        <input
          {...register("password confirm", { required: true })}
          placeholder="Write a password confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
