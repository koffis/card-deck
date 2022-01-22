import { useDispatch } from "react-redux";
import close from "../../../assets/images/close.png";
import { deleteCard } from "../actions/deckActions";

const CardItem = ({ image, code }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-item">
      <img
        onClick={() => dispatch(deleteCard(code))}
        className="card-item-close"
        src={close}
        alt="close"
      />
      <img className="card-item-image" src={image} alt={code} />
    </div>
  );
};

export default CardItem;
