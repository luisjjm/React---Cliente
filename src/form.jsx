import { useState } from 'react'
//El contandor utilizado para otorgar una id al inventario.
let nextId = 0;

//función que muestra un formulario.
function FormInventario() {
  //Variables declaradas con useState.
  const [productName, setProductName] = useState ("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products] = useState([]);

  //función que se activa en cuanto hagamos un submit.
  function handleSubmit(event){
    //Prevenir la recarga de la página.
    event.preventDefault();

    alert("Guardado");

    console.log(products);
    
    setProductName("");
    setProductCategory("");
    setProductDescription("");
    setProductPrice("");
  }

  //El contenido mostrado del formulario.
  return (
    <>
    <form className='formulario' onSubmit={handleSubmit}>
     <h1 className='tituloForm'>Formulario inventario</h1>
     <label>Nombre del producto</label>
     <input
        value={productName}
        onChange={(e)=>setProductName(e.target.value)}
        type='text' placeholder='Nombre...'>
      </input>
      <label>Categoria</label>
      <input
        value={productCategory}
        onChange={(e)=>setProductCategory(e.target.value)}
        type='text' placeholder='Categoria...'>
      </input>
     <label>Descripción</label>
     <textarea
        value={productDescription}
        onChange={(e)=>setProductDescription(e.target.value)}
        rows='4' maxLength='200' placeholder='Describe el producto...'>      
     </textarea>
     <label>Precio</label>
     <input className='inputPrice'
        value={productPrice}
        onChange={(e)=>setProductPrice(e.target.value)}
        type='number' min="0.01" step="0.01" placeholder='Precio...'>
      </input>
      {/**Al clicar se publica el contenido. 
        * Si los campos estan vacios el botón se desabilita  */}
      <button 
            onClick={()=>{products.push({
              id: nextId++,
              name: productName,
              category: productCategory,
              description: productDescription,
              price: productPrice
            });
            }}
          className='buttonForm' type='submit'
          disabled={productPrice === "" || productName === "" || productCategory === "" ? true : false}>Subir
        </button>
     </form>
      {/* Los datos publicados se mostrarán en una lista */}
      <ol>
        {products.map(e=>(<li key={e.id}>{e.name}, {e.category}, {e.description}, {e.price}</li>))}
      </ol>

    </>
  )
}

// Exportar el formulario para permitir el acceso a la función.
export default FormInventario;