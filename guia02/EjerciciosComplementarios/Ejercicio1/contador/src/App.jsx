import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="container">
      <h1>Contador</h1>
      <h2>{contador}</h2>

      <div className="buttons">
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  );
}

export default App;
