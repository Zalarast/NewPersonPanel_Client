import React from "react";
import { Login, Main } from "./pages";
import { autoAuthorization } from "./pages/Login/functions";
import { userInfo } from "./types";

function App() {
  const [login, setLogin] = React.useState(false);
  const setAuth = () => setLogin(!login);
  const [userInfo, setUserInfo] = React.useState<userInfo>({});

  // eslint-disable-next-line
  React.useEffect(() => {
    autoAuthorization(setUserInfo)
      .then((res) => res && setAuth())
      .catch((err) => console.error("При авторизации произошла ошибка:", err));
  }, []);

  return (
    <div className="App">
      <Login auth={setAuth} login={login} setUserInfo={setUserInfo}>
        <Main auth={setAuth} userInfo={userInfo} />
      </Login>
    </div>
  );
}

export default App;
