import React from "react";
import { Login, Main } from "./pages";

function App() {
  const [login, setLogin] = React.useState(false);
  const authorization = () => setLogin(!login);
  return (
    <div className="App">
      {login ? <Main auth={authorization} /> : <Login auth={authorization} />}
    </div>
  );
}

export default App;
