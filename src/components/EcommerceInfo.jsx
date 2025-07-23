import Plus from '../assets/icon-plus.svg'
import Minus from '../assets/icon-minus.svg'
import CartIcon from '../assets/icon-cart.svg'

export default function EcommerceInfo() {
  return (
    <section className="section-info-container">
      <div className="inner-section-info-container">
        <div className="product-info-container">
          <h3>SNEAKER COMPANY</h3>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="product-price-container">
          <div className="main-price-container">
            <span className="final-price">$125.00</span>
            <span className="discount-percentage">50%</span>
          </div>
          <div className="discount-price-container">
            <span className="discount-price">$250.00</span>
          </div>
        </div>
        <div className="add-to-cart-container">
            <div className="counter-cart">
                <button><img src={Minus} alt="Minus icon"/></button>
                <span>0</span>
                <button><img src={Plus} alt="Plus icon"/></button>
            </div>
            <button className="add-cart-button">
                <img src={CartIcon} alt="Cart Icon for button"/>
                <span> Add to cart </span>
            </button>
        </div>
      </div>
    </section>
  );
}
