import React from "react";
import UseStateEx from "./Components/useState/useStateTest";
import NonUseStateTest from './Components/useState/nonUseStateTest';
import Area from "./Components/area";

function App() {
  return (
    <div>
      <UseStateEx></UseStateEx>
      <NonUseStateTest></NonUseStateTest>
      <Area />
    </div>
  );
}

export default App;
