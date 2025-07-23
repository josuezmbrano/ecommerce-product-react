import EcommerceHeader from './EcommerceHeader'
import EcommerceGallery from './EcommerceGallery'
import EcommerceInfo from './EcommerceInfo'

export default function EcommerceApp() {
    return (
        <main className="ecommerce-app">
            <EcommerceHeader />
            <div className="sections-container">
                <EcommerceGallery />
                <EcommerceInfo />
            </div>
        </main>
    )
}