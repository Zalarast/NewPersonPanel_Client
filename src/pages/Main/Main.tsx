import { NavMenu } from "../../components";
import { LoginProps } from "../../types";
import { removeCoockie } from "../../utils";
import "../../CSS/Main.css";
import React from "react";
export default function Main({ auth }: LoginProps) {
  const [navOpen, setNavOpen] = React.useState(true);
  const handleOpenNavMenu = () => setNavOpen(!navOpen);
  return (
    <div className="Main">
      <NavMenu open={handleOpenNavMenu} stateOpen={navOpen} />
      <div>
        <button onClick={handleOpenNavMenu}>Close Menu</button>
        1231231
        <button
          onClick={() => {
            auth();
            removeCoockie("token");
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
