import Cartitem from "./Cartitem"
import CheckoutButton from "./CheckoutButton"

const Cart = ({cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0)

    return (
        <div>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
            <>
                <p>Não há itens no carrinho.</p>
                {/* <CheckoutButton onCheckout={onCheckout}/> */}
            </>
            ) : (
        <>
            {cartItems.map((item) => {
                <Cartitem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart}/>
            })}
            <div className="total">
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <CheckoutButton cartItems={cartItems} setCartItems={setCartItems}/>
            </div>
        </> 
        )}
        </div>
    )
}

export default Cart
