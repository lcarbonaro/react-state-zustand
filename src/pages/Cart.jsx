import useCartStore from '../state/CartStore';

function Cart() {
    const { products, removeProduct, clearProducts, incrementQty, decrementQty } = useCartStore();
   
    return (
      <div>
        <p>Shopping Cart</p>
        <p>You have {products.length} product(s) in your cart.</p>
        <p>Cart Total:${ products.reduce((t,p)=>t+=(p.qty*p.price),0) }</p>

        {products.length>0 ? <button onClick={clearProducts}>Clear Cart</button> : ''}
        
        {products.map(product => (
            <div key={product.id}>
                <p><img className="prod-image-small" src={product.image} alt={product.description} /></p>
                <p>{product.title} @ ${product.price}</p>
                <p>
                  Qty:{product.qty} &nbsp;
                  <button onClick={() => incrementQty(product.id) }>+</button> &nbsp;
                  <button onClick={() => decrementQty(product.id) }>-</button> &nbsp; 
                  Sub-total:${product.qty * product.price}
                </p>
                <button onClick={() => removeProduct(product.id) }>Remove</button>
            </div>
        ))}

        


      </div>
    )
  }
  
  export default Cart;