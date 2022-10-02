function Login() {
  function handleFormSubmit(event) { //обработка значений кот польз 
    event.preventDefault();            //вводит в инпут
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    alert(JSON.stringify(userData)); // converting object into string 
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
