import { useState } from "react";

function Conversor() {
  const [temperatura, setTemperatura] = useState("");
  const [tipo, setTipo] = useState("CtoF");
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    let res;

    if (tipo === "CtoF") {
      res = (temperatura * 9) / 5 + 32;
    } else {
      res = ((temperatura - 32) * 5) / 9;
    }

    setResultado(res.toFixed(2));
    };

    const limpiar = () => {
    setTemperatura("");
    setResultado(null);
  };


  return (
    <div>
      <h1>Conversor de Temperatura</h1>

      <input
        type="number"
        placeholder="Ingrese la temperatura"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
      />

      <div>
        <label>
          <input
            type="radio"
            value="CtoF"
            checked={tipo === "CtoF"}
            onChange={(e) => setTipo(e.target.value)}
          />
          Celsius → Fahrenheit
        </label>

        <label>
          <input
            type="radio"
            value="FtoC"
            checked={tipo === "FtoC"}
            onChange={(e) => setTipo(e.target.value)}
          />
          Fahrenheit → Celsius
        </label>
      </div>

      <button onClick={convertir}>Convertir</button>
      <button onClick={limpiar}>Nuevo cálculo</button>


      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default Conversor;
