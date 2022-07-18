import React from "react";
import "../../CSS/Login.css";
import { AuthData, LoginProps } from "../../types";
import { authorization } from "./functions";

export default function Login({ auth }: LoginProps) {
  const [authData, setAuthData] = React.useState<AuthData>({
    login: "",
    password: "",
  });

  React.useEffect(() => console.log(authData), [authData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const loginIn = async () => {
    if (authData.login && authData.password) {
      const result = await authorization(authData);
      if (result) auth();
      else alert("Неизвестный пользователь");
    } else alert("Ошибка, введены не все данные");
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
