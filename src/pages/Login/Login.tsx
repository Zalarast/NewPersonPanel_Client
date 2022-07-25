import React from "react";
import "../../CSS/Login.css";
import { AuthData, LoginProps } from "../../types";
import { authorization } from "./functions";

export default function Login({ auth, login, setUserInfo, children }: LoginProps) {
  const [authData, setAuthData] = React.useState<AuthData>({
    login: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const loginIn = async () => {
    if (authData.login && authData.password) {
      const result = await authorization(authData, setUserInfo);
      if (result) auth();
      else alert("Неизвестный пользователь");
    } else alert("Ошибка, введены не все данные");
  };

  return login ? (
    children
  ) : (
    <div className="Login" onKeyDown={(e) => e.key === "Enter" && loginIn()}>
      <h1 className="loginTitle">Авторизация</h1>
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
