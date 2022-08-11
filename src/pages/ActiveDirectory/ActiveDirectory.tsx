import React from "react";
import "../../CSS/ActiveDirectory.css";
import { generatePassword } from "../../utils";

export default function ActiveDirectory() {
  const [pass, setPass] = React.useState("");
  const generatePass = () => setPass(generatePassword(10));
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)
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
          onChange={handleChangePass}
        />
        <button onClick={generatePass} style={{ position: "absolute" }}>
          Сгенерировать
        </button>
      </div>
      <div>
        <button onClick={() => alert(pass)}>
          Показать Пароль
        </button>
      </div>
    </div>
  );
}
