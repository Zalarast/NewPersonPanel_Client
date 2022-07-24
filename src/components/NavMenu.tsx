import "../CSS/NavMenu.css";
import { NavMenuProps } from "../types";
import { Link } from "react-router-dom";

export default function NavMenu({ stateOpen, open }: NavMenuProps) {
  return (
    <div className={`NavMenu ${stateOpen ? "open" : "close"}`}>
      <h1>Панель Управления</h1>
      <div className="navList">
        <Link to="/ActiveDirectory" onClick={open}>
          Добавление в Active Directory
        </Link>
        <Link to="/Bitrix24" onClick={open}>
          Добавление в Bitrix24
        </Link>
      </div>
      <button onClick={open}>Закрыть панель</button>
    </div>
  );
}
