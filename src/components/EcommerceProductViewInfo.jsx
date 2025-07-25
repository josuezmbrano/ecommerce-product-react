import React from 'react'
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import CartIcon from "../assets/icon-cart.svg";

export default function EcommerceProductViewInfo({
  id,
  name,
  type,
  description,
  finalprice,
  totalprice,
  discount,
  toggleCartAdd,
  image
}) {

  // Estado inicializado para la cantidad del producto a añadir al carrito
  const [quantity, setQuantity] = React.useState(0)

  //Funciones que suman o restan a ese quantity state
  function addQuantity () {
    setQuantity(prevQuant => prevQuant + 1)
    if (errors) {
      setErrors("")
    }
  }
  function subsQuantity() {
    setQuantity(prevQuant => prevQuant - 1)
  }

  const [errors, setErrors] = React.useState("")
  function toggleSubmit () {
    if (quantity === 0) {
      setErrors("La cantidad a añadir no puede ser 0")
    } else {
      const total = finalprice * quantity
      toggleCartAdd(id, name, finalprice, quantity, total, image)
      setQuantity(0)
      setErrors("")
    }
  }
  
  return (
    <section className="section-info-container">
      <div className="inner-section-info-container">
        <div className="product-info-container">
          <h3>{type}</h3>
          <h2>{name}</h2>
          <p>
            {description}
          </p>
        </div>
        <div className="product-price-container">
          <div className="main-price-container">
            <span className="final-price">${finalprice.toFixed(2)}</span>
            <span className="discount-percentage">{discount}%</span>
          </div>
          <div className="discount-price-container">
            <span className="discount-price">${totalprice.toFixed(2)}</span>
          </div>
        </div>
        <div className="add-to-cart-container">
          <div className="counter-cart">
            <button onClick={subsQuantity} disabled={quantity === 0}>
              <img src={Minus} alt="Minus icon" />
            </button>
            <span>{quantity}</span>
            <button onClick={addQuantity}>
              <img src={Plus} alt="Plus icon" />
            </button>
          </div>
          <button onClick={toggleSubmit} className="add-cart-button">
            <img src={CartIcon} alt="Cart Icon for button" />
            <span> Add to cart </span>
          </button>
        </div>
        {errors && <p className="error-text">{errors}</p>}
      </div>
    </section>
  );
}
