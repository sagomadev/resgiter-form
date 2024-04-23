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
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
      />
      <label htmlFor="role">Rol:</label>
      <select id="role" {...register("role")}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
