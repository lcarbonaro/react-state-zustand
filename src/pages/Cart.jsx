import useCartStore from '../state/CartStore';

function Cart() {
    const { products, removeProduct, clearProducts } = useCartStore();
   
    return (
      <div>
        <p>Shopping Cart</p>
        <p>You have {products.length} product(s) in your cart.</p>

        {products.length>0 ? <button onClick={clearProducts}>Clear Cart</button> : ''}
        
        {products.map(product => (
            <div key={product.id}>
                <p><img className="prod-image-small" src={product.image} alt={product.description} /></p>
                <p>{product.title} @ ${product.price}</p>
                <p>qty: {product.qty}</p>
                <button onClick={() => removeProduct(product.id) }>Remove</button>
            </div>
        ))}

        


      </div>
    )
  }
  
  export default Cart;