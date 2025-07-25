export default function EcommerceListItem({
  id,
  name,
  type,
  totalprice,
  finalprice,
  image,
  discount,
  toggleId
}) {
  
  return (
    <div onClick={() => toggleId(id)} className="card-list-item-container">
      <div className="card-list-img-div">
        <img src={image} alt={`Image number: ${id}`} />
      </div>
      <div className="card-list-info-div">
        <span className="card-list-info-span">{name}</span>
        <p>{type}</p>
        <div className="card-list-price-div">
          <span className="final-price-card">${finalprice.toFixed(2)}</span>
          <span className="total-price">(${totalprice.toFixed(2)})</span>
        </div>
      </div>
        <span className="card-item-sale-preview">Sale {discount}%</span>
    </div>
  );
}
