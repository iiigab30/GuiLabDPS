import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();

    // Credenciales simuladas
    if (usuario === "admin" && password === "1234") {
      setMensaje(`Bienvenido, ${usuario}`);
    } else {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-card">
      <h1>Inicio de Sesión</h1>

      <form onSubmit={manejarLogin}>
        <div className="field">
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Login;
