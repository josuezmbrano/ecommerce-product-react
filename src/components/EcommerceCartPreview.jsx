import CartItemPreview from "./CartItemPreview";
export default function EcommerceCartPreview({ cartItems, removeCartItem }) {

  const totalSum = cartItems.reduce((sum, item ) => sum + item.total, 0)

  return (
    <section className="cart-preview-section">
      <div className="cart-title-div">
        <span>Cart</span>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CartItemPreview
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
            total={cartItem.total}
            image={cartItem.image}
            removeCartItem={removeCartItem}
          />
        );
      })}
      {cartItems.length > 0 ? (
        <>
          <p className="total-order-preview">Order total: ${totalSum.toFixed(2)}</p>
          <button className="checkout-button-preview">Checkout</button>
        </>
      ) : (
        <div className="cart-message-div">
          <p>No hay productos en el carrito.</p>
        </div>
      )}
    </section>
  );
}
