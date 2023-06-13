import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { BrowserRouter } from "react-router-dom";
import Myrouter from "./routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Myrouter />
      </BrowserRouter>
    </>
  );
}

export default App;
