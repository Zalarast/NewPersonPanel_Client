import React from "react";
import { Login, Main } from "./pages";
import { autoAuthorization } from "./pages/Login/functions";
import { getCookie } from "./utils";

function App() {
  const [login, setLogin] = React.useState(false);
  const setAuth = () => setLogin(!login);

  // eslint-disable-next-line
  React.useEffect(() => {
    const token = getCookie("token");
    if (token) {
      autoAuthorization(token)
        .then((res) => res && setAuth())
        .catch((err) =>
          console.error("При авторизации произошла ошибка:", err)
        );
    }
  }, []);

  return (
    <div className="App">
      {login ? <Main auth={setAuth} /> : <Login auth={setAuth} />}
    </div>
  );
}

export default App;
