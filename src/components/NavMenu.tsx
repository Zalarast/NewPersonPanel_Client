import "../CSS/NavMenu.css";
import { NavMenuProps } from "../types";

export default function NavMenu({ stateOpen, open }: NavMenuProps) {
  return (
    <div className={`NavMenu ${stateOpen ? "open" : "close"}`}>
      <h1>Панель Управления</h1>
      <div className="navList">
        <a href="#">Добавление в Active Directory</a>
        <a href="#">Добавление в Bitrix24</a>
      </div>
      <button onClick={open}>Закрыть панель</button>
    </div>
  );
}
