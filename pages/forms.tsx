import { FieldErrors, useForm } from "react-hook-form";
interface LoginForm {
  email: string;
  username: string;
  password: string;
  errors?: string; // 전역적인 에러 적으려고
}
export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    reset,
    resetField,
    formState: { errors, touchedFields },
  } = useForm<LoginForm>({ mode: "onChange" });
  console.log(watch());
  const onValid = () => {
    console.log("I'm valid");
    setError("username", { message: "Taken username" });
  };
  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, inValid)}>
      <input
        {...register("username", {
          minLength: {
            message: "need to 5 more char",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />

      {watch("username") === "" ? "Pleaseajksdasjdh" : ""}
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.errors?.message}
      <input type="submit" value="Create account" />
    </form>
  );
}
