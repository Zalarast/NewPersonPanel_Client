import React from "react";
import "../CSS/Login.css";
import { AuthData, LoginProps } from "../types";

export default function Login({ auth }: LoginProps) {
  const [authData, setAuthData] = React.useState<AuthData>({
    login: null,
    password: null,
  });

  React.useEffect(() => console.log(authData), [authData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const loginIn = () => {
    if (authData.login && authData.password) auth();
    else alert("Ошибка, введены не все данные");
  };

  return (
    <div className="Login">
      <h1>Авторизация</h1>
      <div>
        <h2>Логин</h2>
        <input name="login" onChange={handleChange} />
      </div>
      <div>
        <h2>Пароль</h2>
        <input name="password" type="password" onChange={handleChange} />
      </div>
      <button onClick={loginIn}>Вход</button>
    </div>
  );
}
