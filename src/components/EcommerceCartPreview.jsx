import Thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import TrashIcon from '../assets/icon-delete.svg'

export default function CartPreview() {
    return (
        <section className="cart-preview-section">
            <span>Cart</span>
            <div className="cart-preview-info-container">
                <div className="cart-preview-image-div"><img src={Thumbnail1}/></div>
                <div className="cart-preview-text-div">
                    <h3>Fall Limited Edition Snickers</h3>
                    <div className="cart-preview-price-div">
                        <span className="cart-preview-price-per-item">$125.00 x 3</span>
                        <span className="cart-preview-total-price">$375.00</span>
                    </div>
                </div>
                <button className="trash-button-preview"><img src={TrashIcon} /></button>
            </div>
            <button className="checkout-button-preview">Checkout</button>
        </section>
    )
}