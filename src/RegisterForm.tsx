import "./RegisterForm.css";

function RegisterForm() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
