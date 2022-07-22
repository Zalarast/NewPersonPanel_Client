import { HeadProps } from "../types";
import "../CSS/Head.css";

export default function Head({ openMenu, reAuth }: HeadProps) {
  return (
    <div className="Head">
      <button onClick={openMenu}>Открыть панель</button>
      <button onClick={reAuth}>Выйти из учётки</button>
    </div>
  );
}
