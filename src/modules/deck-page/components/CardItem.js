const CardItem = ({ image, code }) => {
  return (
    <div className="card-item">
      <img src={image} alt={code} />
    </div>
  );
};

export default CardItem;
