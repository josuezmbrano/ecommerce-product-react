import Logo from '../assets/logo.svg'
import CartIcon from '../assets/icon-cart.svg'
import ProfileAvatar from '../assets/image-avatar.png'

export default function EcommerceHeader({toggleCart}){
    return (
        <header className="header-container">
            <div className="header-container-nav">
                <img src={Logo} alt="Logo - Sneakers" />
                <nav>
                    <ul className="header-nav">
                        <li>Collection</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="header-container-profile">
                <img onClick={toggleCart} className="header-cart" src={CartIcon} alt="Cart icon"/>
                <img className="header-avatar" src={ProfileAvatar} alt="Profile picture avatar"/>
            </div>
        </header>
    )
}