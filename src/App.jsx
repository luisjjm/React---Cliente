import './App.css'

let nombre = "Luis";

function Saludo({ nombre }) {
  return (
    <>
    <h1 className='titulo'>Hola {nombre}</h1>
    </>
  )
}

function Tarjeta({alumno}) {
  return (
    <>
      <div className='center'>
        <div className='tarjeta'>
          <h2>Alumno: {alumno.nombre}</h2>
          <p>Edad: {alumno.edad}</p>
          <p>Curso: {alumno.curso}</p>
          <p>Fecha: {alumno.fecha}</p>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Saludo nombre={nombre}/>
      <Tarjeta alumno={{nombre: nombre, edad: 28, curso: "DAW", fecha: "26/27"}}/>
    </>
  )
}

export default App
