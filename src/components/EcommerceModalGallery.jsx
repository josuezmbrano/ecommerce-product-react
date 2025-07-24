import MainImage1 from "../assets/image-product-1.jpg";
import ThumbNail1 from "../assets/image-product-1-thumbnail.jpg";
import ThumbNail2 from "../assets/image-product-2-thumbnail.jpg";
import ThumbNail3 from "../assets/image-product-3-thumbnail.jpg";
import ThumbNail4 from "../assets/image-product-4-thumbnail.jpg";
import CloseIcon from "../assets/icon-close.svg";
import NextArrow from "../assets/icon-next.svg"
import PreviousArrow from "../assets/icon-previous.svg"

export default function EcommerceModalGallery({toggleModal}) {
  return (
    <div className="modal-container">
      <div className="inner-modal-container">
        <div className="modal-close-div">
          <button onClick={toggleModal}>
            <img src={CloseIcon} />
          </button>
        </div>
        <div className="main-image-container main-modal">
          <button className="previous-arrow"><img src={PreviousArrow} alt="Previous Arrow"/></button>
          <img src={MainImage1} alt="Main product image" />
          <button className="next-arrow"><img src={NextArrow} alt="Next Arrow"/></button>
        </div>
        <div className="thumbnail-image-container thumbnail-modal">
          <button>
            <img src={ThumbNail1} alt="thumbnail product image 1" />
          </button>
          <button>
            <img src={ThumbNail2} alt="thumbnail product image 2" />
          </button>
          <button>
            <img src={ThumbNail3} alt="thumbnail product image 3" />
          </button>
          <button>
            <img src={ThumbNail4} alt="thumbnail product image 4" />
          </button>
        </div>
      </div>
    </div>
  );
}
