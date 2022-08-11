import { Head, NavMenu } from "../../components";
import { MainProps } from "../../types";
import { removeCoockie } from "../../utils";
import "../../CSS/Main.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ActiveDirectory, Settings } from "../";

export default function Main({ auth, userInfo }: MainProps) {
  const [navOpen, setNavOpen] = React.useState(false);
  const handleOpenNavMenu = () => setNavOpen(!navOpen);
  const reAuth = () => {
    removeCoockie(["UID", "PID"]);
    auth();
  };
  return (
    <div className="Main">
      <NavMenu open={handleOpenNavMenu} stateOpen={navOpen} />
      <Head openMenu={handleOpenNavMenu} reAuth={reAuth} userInfo={userInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <div>Приветсвую на сайте по добавлению новых сотрудников</div>
          }
        />
        <Route path="/ActiveDirectory" element={<ActiveDirectory />} />
        <Route
          path="/Bitrix24"
          element={<div>Создание учётки в Bitrix24</div>}
        />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<div>Неизвестная страница</div>} />
      </Routes>
    </div>
  );
}
