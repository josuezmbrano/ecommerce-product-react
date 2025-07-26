import React from "react";
import useToggleImageId from "../hooks/useToggleImageId";
import EcommerceModalGallery from "./EcommerceModalGallery";

export default function EcommerceProductViewGallery({
  mainImageArray,
  thumbnailImageArray,
}) {

  const [currentImageId, toggleImageId, isFading] = useToggleImageId();

  // Encontramos la imagen principal segun la coincidencia del currentImageId con el id de cada imagen
  const mainImage = mainImageArray.find((image) => currentImageId === image.id);

  // Encontramos el index actual en el que nos encontramos actualmente
  const currentIndex = mainImageArray.findIndex(image => currentImageId === image.id)

  // Con el currentIndex encontrado, sumamos o restamos y llamamos a toggleImageId, le pasamos el index calculado para que
  // actualize el estado inicializado de currentImageId para cambiar la foto con las flechas del modal
  function nextImage() {
    const nextIndex = (currentIndex + 1) % mainImageArray.length
    return toggleImageId(mainImageArray[nextIndex].id)
  }

  function previousImage() {
    const previousIndex = (currentIndex - 1 + mainImageArray.length) % mainImageArray.length
    return toggleImageId(mainImageArray[previousIndex].id)
  }

  // Creamos un estado showModal inicializado en false y ejecutamos una funcion simple para
  // Cambiar de true a false y viceversa
  const [showModal, setShowModal] = React.useState(false);
  function toggleModal() {
    setShowModal((prevModal) => !prevModal);
  }


  return (
    <section className="section-gallery-container">
      <div onClick={toggleModal} className="main-image-container">
        <img className={isFading ? "fade-animation" : ""}
          src={mainImage.image}
          alt={`Main product image: ${mainImage.id}`}
        />
      </div>
      <div className="thumbnail-image-container">
        {thumbnailImageArray.map((thumbnail) => {
          return (
            <button
              onClick={() => toggleImageId(thumbnail.id)}
              key={thumbnail.id}
            >
              <img src={thumbnail.image} />
            </button>
          );
        })}
      </div>
      {showModal && (
        <EcommerceModalGallery
          mainImage={mainImage}
          toggleModal={toggleModal}
          togglePhoto={toggleImageId}
          mainImages={mainImageArray}
          nextImage={nextImage}
          previousImage={previousImage}
          isFading={isFading}
        />
      )}
    </section>
  );
}
