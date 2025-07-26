import React from "react";
import EcommerceHeader from "./EcommerceHeader";
import EcommerceCartPreview from "./EcommerceCartPreview";
import EcommerceProductList from "./EcommerceProductList.jsx";
import EcommerceProductView from "./EcommerceProductView.jsx";
import EcommerceProductViewGallery from "./EcommerceProductViewGallery.jsx";
import EcommerceProductViewInfo from "./EcommerceProductViewInfo.jsx";
import useToggleProductId from "../hooks/useToggleProductId.js";
import useAddToCart from "../hooks/useAddToCart.js";
import { products } from "./productData.js";

export default function EcommerceApp() {
  //Custom hooks para identificar producto seleccionado
  const [currentProductId, toggleId] = useToggleProductId();
  //Custom hook para las funciones del carrito
  const [cartItems, toggleCartAdd, removeCartItem] = useAddToCart();

  const itemsCount = cartItems.length

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

  //Condition the isProductView status by the existence of productSelected to render the productView components
  const [isProductView, setIsProductView] = React.useState(false);

  function toggleProductView() {
    setIsProductView((prevView) => !prevView);
  }

  //Estado inicializado y funcion para revertir el estado actual de showCart de modo de renderizarlo condicionalmente
  const [showCart, setShowCart] = React.useState(false);
  function toggleCart() {
    setShowCart((prevShow) => !prevShow);
  }

  return (
    <main className="ecommerce-app">
      <EcommerceHeader toggleCart={toggleCart} toggleProductView={toggleProductView} itemsCount={itemsCount}/>
      {showCart && (
        <EcommerceCartPreview
          cartItems={cartItems}
          removeCartItem={removeCartItem}
        />
      )}
      <div className="sections-container glass-effect-panel">
        {isProductView && productSelected ? (
          <EcommerceProductView>
            <EcommerceProductViewGallery
              mainImageArray={mainImageArray}
              thumbnailImageArray={thumbnailImageArray}
            />
            <EcommerceProductViewInfo
              id={productSelected.id}
              image={productSelected.photo[0].image}
              name={productSelected.name}
              type={productSelected.type}
              description={productSelected.description}
              finalprice={productSelected.finalprice}
              totalprice={productSelected.totalprice}
              discount={productSelected.discount}
              toggleCartAdd={toggleCartAdd}
            />
          </EcommerceProductView>
        ) : (
          <EcommerceProductList
            toggleId={toggleId}
            toggleProductView={toggleProductView}
          />
        )}
      </div>
    </main>
  );
}
