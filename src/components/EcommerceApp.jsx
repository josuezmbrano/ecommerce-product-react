import React from "react";
import EcommerceHeader from "./EcommerceHeader";
// import EcommerceCartPreview from './EcommerceCartPreview'
import EcommerceProductList from "./EcommerceProductList.jsx";
import EcommerceProductView from "./EcommerceProductView.jsx";
import EcommerceProductViewGallery from "./EcommerceProductViewGallery.jsx";
import EcommerceProductViewInfo from "./EcommerceProductViewInfo.jsx";
import useToggleProductId from "../hooks/useToggleProductId.js";
import { products } from "./productData.js";

export default function EcommerceApp() {
  const [currentProductId, toggleId] = useToggleProductId();

  //Find the product that equals the currentProductId
  const productSelected = products.find(
    (product) => currentProductId === product.id
  );

  //Destructure the array from the product filtered
  //and store the photo and thumbnail array to use it in ProductViewGallery
  let mainImageArray = [];
  let thumbnailImageArray = [];

  if (productSelected) {
    mainImageArray = productSelected.photo;
    thumbnailImageArray = productSelected.thumbnail;
  }

  //Condition the showProduct status by the existence of productSelected to render the productView components
  let showProduct = false
  if (productSelected) {
    showProduct = true
  }

  return (
    <main className="ecommerce-app">
      <EcommerceHeader />
      <div className="sections-container">
        {showProduct ? (
          <EcommerceProductView>
            <EcommerceProductViewGallery
              mainImageArray={mainImageArray}
              thumbnailImageArray={thumbnailImageArray}
            />
            <EcommerceProductViewInfo
              name={productSelected.name}
              type={productSelected.type}
              description={productSelected.description}
              finalprice={productSelected.finalprice}
              totalprice={productSelected.totalprice}
              discount={productSelected.discount}
            />
          </EcommerceProductView>
        ) : (
          <EcommerceProductList toggleId={toggleId} />
        )}
      </div>
    </main>
  );
}
