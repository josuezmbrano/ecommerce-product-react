import React from 'react'

import MainImage1 from '../assets/image-product-1.jpg'
import MainImage2 from '../assets/image-product-2.jpg'
import MainImage3 from '../assets/image-product-3.jpg'
import MainImage4 from '../assets/image-product-4.jpg'
import ThumbNail1 from '../assets/image-product-1-thumbnail.jpg'
import ThumbNail2 from '../assets/image-product-2-thumbnail.jpg'
import ThumbNail3 from '../assets/image-product-3-thumbnail.jpg'
import ThumbNail4 from '../assets/image-product-4-thumbnail.jpg'
import EcommerceModalGallery from './EcommerceModalGallery'

export default function EcommerceGallery() {
    const [isModal, setIsModal] = React.useState(false)

    function toggleModal() {
        setIsModal(prevModal => !prevModal)
    }

    return (
        <section className="section-gallery-container">
            <div className="main-image-container">
                <img onClick={toggleModal} src={MainImage1} alt="Main product image" />
            </div>
            <div className="thumbnail-image-container">
                <button><img src={ThumbNail1} alt="thumbnail product image 1"/></button>
                <button><img src={ThumbNail2} alt="thumbnail product image 2"/></button>
                <button><img src={ThumbNail3} alt="thumbnail product image 3"/></button>
                <button><img src={ThumbNail4} alt="thumbnail product image 4"/></button>
            </div>
            {isModal && <EcommerceModalGallery toggleModal={toggleModal}/>}
        </section>
    )
}