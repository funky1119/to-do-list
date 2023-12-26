import { useForm } from "react-hook-form";
import { validation } from "./utils/ValidationCheck";
import { IFormData } from "./models/formData";
function TodoList() {
  /**
   * handleSubmit => 1번째 인자: 데이터가 유효했을때 호출되는 함수
   *                 2번째 인자: 데이터가 유효하지 않을 때 호출되는 함수
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        {
          message: "비밀번호가 같지 않아요",
        },
        { shouldFocus: true }
      );
      //   setError("extraError", { message: "서버 에러" });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "이메일 입력 필요",
            pattern: {
              value: validation.email,
              message: "이메일 형식이 아닙니다.",
            },
          })}
          placeholder="Write a email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("userName", {
            required: "사용자명을 입력",
            minLength: { value: 5, message: "최소 5자 이상 입력" },
            validate: {
              nico: (value) => !value.includes("nico") || "No nico",
              nick: (value) => !value.includes("nick") || "No nick",
            },
          })}
          placeholder="Write a userName"
        />
        <span>{errors.userName?.message}</span>
        <input
          {...register("phoneNumber", { required: "핸드폰 번호 입력" })}
          placeholder="Write a phoneNumber"
        />
        <span>{errors.phoneNumber?.message}</span>
        <input
          {...register("password", { required: "비밀번호 입력" })}
          placeholder="Write a password"
        />
        <span>{errors.password?.message}</span>
        <input
          {...register("passwordConfirm", { required: "비밀번호 확인 입력" })}
          placeholder="Write a password confirm"
        />
        <span>{errors.passwordConfirm?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;
