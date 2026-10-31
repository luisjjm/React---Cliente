import { useState } from 'react'
import './App.css'
//Importamos el archivo form.jsx
import Form from './components/form'
import {products, customers} from './components/inventory'

//Aquí se visualizará el contenido
function App() {
  const [options, setOptions] = useState("Cliente")
  return (
    <>
      <h1>{(options === "products" ? "Inventario" : "Cliente")}</h1>
      {/*
      <select onChange={(e) => setOptions(e.target.value)}>
        <option value="customers">Cliente</option>
        <option value="products">Inventario</option>
      </select>
        */}
      <nav>
          <p id="products" onClick={(e) => setOptions(e.target.id)}>Inventario</p>
          <p id="customers" onClick={(e) => setOptions(e.target.id)}>Cliente</p>
      </nav>
      <Form inputs={options === "products" ? products : customers}/>
    </>
  )
}

export default App
