import React from 'react'
import EcommerceHeader from './EcommerceHeader'
import EcommerceGallery from './EcommerceGallery'
import EcommerceInfo from './EcommerceInfo'
import EcommerceCartPreview from './EcommerceCartPreview'

export default function EcommerceApp() {
    const [cartModal, setCartModal] = React.useState(false)

    function toggleCart() {
        setCartModal(prevCart => !prevCart)
    }

    return (
        <main className="ecommerce-app">
            <EcommerceHeader toggleCart={toggleCart} />
            {cartModal && <EcommerceCartPreview />}
            <div className="sections-container">
                <EcommerceGallery />
                <EcommerceInfo />
            </div>
        </main>
    )
}