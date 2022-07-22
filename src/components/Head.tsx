import { HeadProps } from "../types";
import "../CSS/Head.css";
import { Link } from "react-router-dom";

export default function Head({ openMenu, reAuth }: HeadProps) {
  return (
    <div className="Head">
      <button onClick={openMenu}>Открыть панель</button>
      <Link to="/"><button onClick={reAuth}>Выйти из учётки</button></Link>
    </div>
  );
}
