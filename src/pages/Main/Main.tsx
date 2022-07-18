import { NavMenu } from "../../components";
import { LoginProps } from "../../types";
export default function Main({ auth }: LoginProps) {
  return (
    <div>
      <NavMenu />
      1231231
      <button onClick={auth}>CLOSE</button>
    </div>
  );
}
