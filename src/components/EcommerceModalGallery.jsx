import CloseIcon from "../assets/icon-close.svg";
import NextArrow from "../assets/icon-next.svg";
import PreviousArrow from "../assets/icon-previous.svg";

export default function EcommerceModalGallery({
  toggleModal,
  togglePhoto,
  mainImages,
  mainImage,
  nextImage,
  previousImage,
  isFading
}) {

  return (
    <div className="modal-container">
      <div className="inner-modal-container">
        <div className="modal-close-div">
          <button onClick={toggleModal}>
            <img src={CloseIcon} />
          </button>
        </div>
        <div className="main-modal">
          <button onClick={previousImage} className="previous-arrow">
            <img src={PreviousArrow} alt="Previous Arrow" />
          </button>
          <div className="modal-main-image">
          <img className={isFading ? "fade-animation" : ""} src={mainImage.image} alt="Main product image" />
          </div>
          <button onClick={nextImage} className="next-arrow">
            <img src={NextArrow} alt="Next Arrow" />
          </button>
        </div>
        <div className="thumbnail-image-container thumbnail-modal">
          {mainImages.map(image => {
            return (
            <button onClick={() => togglePhoto(image.id)} key={image.id}>
              <img src={image.image} />
            </button>
          ); 
          })}
        </div>
      </div>
    </div>
  );
}
