import { Head, NavMenu } from "../../components";
import { MainProps } from "../../types";
import { removeCoockie } from "../../utils";
import "../../CSS/Main.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ActiveDirectory } from "../";

export default function Main({ auth }: MainProps) {
  const [navOpen, setNavOpen] = React.useState(false);
  const handleOpenNavMenu = () => setNavOpen(!navOpen);
  const reAuth = () => {
    removeCoockie("token");
    auth();
  };
  return (
    <div className="Main">
      <NavMenu open={handleOpenNavMenu} stateOpen={navOpen} />
      <Head openMenu={handleOpenNavMenu} reAuth={reAuth} />
      <Routes>
        <Route path="/ActiveDirectory" element={<ActiveDirectory />} />
      </Routes>
    </div>
  );
}
