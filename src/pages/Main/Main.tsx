import { NavMenu } from "../../components";
import { LoginProps } from "../../types";
import { removeCoockie } from "../../utils";
export default function Main({ auth }: LoginProps) {
  return (
    <div>
      <NavMenu />
      1231231
      <button
        onClick={() => {
          auth();
          removeCoockie("token");
        }}
      >
        CLOSE
      </button>
    </div>
  );
}
