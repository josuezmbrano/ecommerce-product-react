import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import CartIcon from "../assets/icon-cart.svg";

export default function EcommerceProductViewInfo({
  name,
  type,
  description,
  finalprice,
  totalprice,
  discount,
}) {
  
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
            <button>
              <img src={Minus} alt="Minus icon" />
            </button>
            <span>0</span>
            <button>
              <img src={Plus} alt="Plus icon" />
            </button>
          </div>
          <button className="add-cart-button">
            <img src={CartIcon} alt="Cart Icon for button" />
            <span> Add to cart </span>
          </button>
        </div>
      </div>
    </section>
  );
}
