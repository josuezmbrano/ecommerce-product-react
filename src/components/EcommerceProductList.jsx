import React from "react";
import { products } from "./productData";
import EcommerceListItem from "./EcommerceListItem";

export default function EcommerceProductList({toggleId, toggleProductView}) {
  return (
    <section className="ecommerce-product-list-container">
      {products.map((product) => {
        return (
          <EcommerceListItem
            key={product.id}
            id={product.id}
            name={product.name}
            type={product.type}
            finalprice={product.finalprice}
            totalprice={product.totalprice}
            image={product.photo[0].image}
            discount={product.discount}
            toggleId={toggleId}
            toggleProductView={toggleProductView}
          />
        );
      })}
    </section>
  );
}
