import { Link } from "react-router-dom";
import { UserMenuProps } from "../types";
import "../CSS/UserMenu.css";

export default function UserMenu({ userInfo, logOut }: UserMenuProps) {
  return (
    <div className="UserMenu">
      <div className="userInfo">
        <img
          className="avatar"
          src={
            userInfo.avatar
              ? userInfo.avatar
              : "https://i.pinimg.com/originals/f4/57/aa/f457aa924ee5343d1b30d0d31eba021b.jpg"
          }
          alt="avatar"
        />
        <h2>{userInfo.login}</h2>
      </div>
      <Link to="/">
        <button onClick={logOut}>Выйти из учётки</button>
      </Link>
    </div>
  );
}
