import { useState, useEffect } from 'react';
import useCartStore from '../state/CartStore';

function Shop() {
  const [products, setProducts] = useState([]);
  const { addProduct } = useCartStore();

  useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=5')
          .then(response => response.json())
          .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <p>Product List</p>

        {products.map(product => (
            <div key={product.id}>
                <p><img className="prod-image" src={product.image} alt={product.description} /></p>
                <p>{product.title} @ ${product.price}</p>
                <button onClick={() => addProduct({...product, qty:1}) }>Add To Cart</button>
            </div>
        ))}
    </div>
  )
}

export default Shop;