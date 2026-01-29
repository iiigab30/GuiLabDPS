import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Equipos = ({equipos}) => {
  return(
    <div className="containerList">
      <h2 className="title">Equipos de Fútbol</h2>
      {
        equipos.map((equipo)=> (
          <div key={equipo.id}>
            <h3 className="nameClub">{equipo.nombre}</h3>
            <ul>
              {equipo.plantilla.map((jugador) => (
                <li className="jugadorCard" key={jugador.id}>
                  <img src={jugador.foto} alt={jugador.nombre} className="fotoJugador" />
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.altura}m <br />
                  Peso: {jugador.peso}Kg
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  )
}

function App(){
  //simula obtencion de datos desde JSON
  const equiposData = [
    {"id": 1, "nombre": "Real Madrid", "plantilla": [
      {"id": 1, "nombre": "Jude Bellingham", "altura": "1.86", "peso": "75", "foto": "/jugadores/bellingham.jpg"},
      {"id": 2, "nombre": "Vinicius Junior", "altura": "1.76", "peso": "73", "foto": "/jugadores/vinicius.jpg"},
      {"id": 3, "nombre": "Kylian Mbappé", "altura": "1.78", "peso": "75", "foto": "/jugadores/mbappe.jpg"},
    ]},
    {"id": 2, "nombre": "FC Barcelona", "plantilla": [
      {"id": 4, "nombre": "Robert Lewandoski", "altura": "1.85", "peso": "81", "foto": "/jugadores/lewan.jpg"},
      {"id": 5, "nombre": "Pedri", "altura": "1.74", "peso": "67", "foto": "/jugadores/pedri.jpg"},
      {"id": 6, "nombre": "Frenkie de Jong", "altura": "1.80", "peso": "74", "foto": "/jugadores/dejong.jpg"},
    ]}
  ];
  return (
    <main>
      <div className="card">
        <h1>Mi aplicación de fútbol</h1>
        <Equipos equipos={equiposData}/>
      </div>
    </main>
  )
}

export default App