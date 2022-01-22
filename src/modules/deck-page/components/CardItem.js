import { useDispatch } from "react-redux";
import close from "../../../assets/images/close.png";
import { deleteCard } from "../actions/deckActions";

/**
 * @desc Component "CardItem".
 * @param {string} image - contain card`s image url.
 * @param {string} code - value that contain card`s unic code.
 * @return {JSX.Element} - component that render one card.
 */
const CardItem = ({ image, code }) => {
  /**
   * @desc [Hook dispatch] Function for dispatching Redux actions.
   * Pass action
   * @param action {object} - instructions for changing data within Redux store
   * @return {void}
   */
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
