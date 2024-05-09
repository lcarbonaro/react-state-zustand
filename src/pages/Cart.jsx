import useCartStore from '../state/CartStore';

function Cart() {
    const { products } = useCartStore();

    


    return (
      <div>
        <p>Shopping Cart</p>
        <p>You have {products.length} product(s) in your cart.</p>

        {products.map(product => (
            <div key={product.id}>
                <p><img className="prod-image-small" src={product.image} alt={product.description} /></p>
                <p>{product.title} @ ${product.price}</p>
                <p>qty: {product.qty}</p>
            </div>
        ))}


      </div>
    )
  }
  
  export default Cart;