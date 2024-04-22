import "./RegisterForm.css";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" {...register("name")} />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" {...register("email")} />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" {...register("password")} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
