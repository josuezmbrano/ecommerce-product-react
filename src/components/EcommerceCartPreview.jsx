import CartItemPreview from "./CartItemPreview";
export default function EcommerceCartPreview({ cartItems, removeCartItem }) {
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
        <button className="checkout-button-preview">Checkout</button>
      ) : (
        <div className="cart-message-div"><p>No hay productos en el carrito.</p></div>
      )}
    </section>
  );
}
