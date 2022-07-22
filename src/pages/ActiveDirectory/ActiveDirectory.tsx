import React from "react";
import "../../CSS/ActiveDirectory.css";
import { generatePassword } from "../../utils";

export default function ActiveDirectory() {
  const [pass, setPass] = React.useState("");
  const generatePass = () => setPass(generatePassword(10));
  return (
    <div className="ActiveDirectory">
      <h1>Введите данные о новом сотруднике</h1>
      <div>
        <h2>ФИО</h2>
        <input placeholder="Иванов Иван Иванович" />
      </div>
      <div>
        <h2>Пароль</h2>
        <input
          placeholder="password123"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={generatePass} style={{ position: "absolute" }}>
          Сгенерировать
        </button>
      </div>
    </div>
  );
}
