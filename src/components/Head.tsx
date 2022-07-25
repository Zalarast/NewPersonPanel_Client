import { HeadProps } from "../types";
import "../CSS/Head.css";
import UserMenu from "./UserMenu";

export default function Head({ openMenu, reAuth, userInfo }: HeadProps) {
  return (
    <div className="Head">
      <button onClick={openMenu}>Открыть панель</button>
      <UserMenu userInfo={userInfo} logOut={reAuth} />
    </div>
  );
}
