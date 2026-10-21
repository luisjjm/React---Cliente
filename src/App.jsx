import './App.css'
import { products } from './Data/products.js'

const elementos = products;

// COMPONENTE PRODUCTOS
function ProductCard(props) {
  return(
    <article className='product-card'>
      <div className='product-visual'>
        {props.emoji}
      </div>
      <div className='product-info'>
        <p className='product-category'>{props.category}</p>
        <h3>{props.name}</h3>
        <p className='product-price'>{props.price}</p>
      </div>
    </article>
  );
}

function App() {
  return(
    <div><p>Hola</p>
        {elementos.map((product) => {
         return( 
            <ProductCard
              emoji = {product.emoji}
              category = {product.category}
              name = {product.name}
              price = {product.price}
              key = {product.name}
            />
          );
        })}
    </div>
  )
}

export default App
