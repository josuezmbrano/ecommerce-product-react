import TrashIcon from "../assets/icon-delete.svg";

export default function CartItemPreview({id, name, price, amount, total, image, removeCartItem}) {
  return (
      <div className="cart-preview-info-container">
        <div className="cart-preview-image-div">
          <img src={image} />
        </div>
        <div className="cart-preview-text-div">
          <h3>{name}</h3>
          <div className="cart-preview-price-div">
            <span className="cart-preview-price-per-item">${price.toFixed(2)} x {amount}</span>
            <span className="cart-preview-total-price">${total.toFixed(2)}</span>
          </div>
        </div>
        <button onClick={() => removeCartItem(id)} className="trash-button-preview">
          <img src={TrashIcon} />
        </button>
      </div>
  );
}
