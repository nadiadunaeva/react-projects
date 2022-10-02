import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ userName: '', password: '' }); //объект как часть
  //состояния Login

  function handleFormSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data)); // converting object into string
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })} //передаем Объект с 2 свойствами
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
