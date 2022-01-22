import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  receiveDeck,
  shuffle,
  receivePartDeck,
  sortSuit,
} from "./../actions/deckActions";
import heart from "../../../assets/images/hearts.png";
import clubs from "../../../assets/images/clubs.png";
import diamonds from "../../../assets/images/diamonds.png";
import spade from "../../../assets/images/spade.png";
import home from "../../../assets/images/home.png";

/**
 * @desc Component "Controll Panel".
 * @return {JSX.Element} - component that render panel to controll deck.
 */
const ControllPanel = () => {
  /**
   * @desc [Hook dispatch] Function for dispatching Redux actions.
   * Pass action
   * @param action {object} - instructions for changing data within Redux store
   * @return {void}
   */
  const dispatch = useDispatch();

  return (
    <div className="controll-panel">
      <Link className="controll-panel-sort-item" to="/">
        <img src={home} alt="home" />
      </Link>
      <button onClick={() => dispatch(receiveDeck())}>Receive</button>
      <button
        onClick={() => {
          dispatch(shuffle());
        }}
      >
        Shuffle
      </button>
      <button
        onClick={() => {
          dispatch(sortSuit());
        }}
      >
        Suit in a row
      </button>
      <div className="controll-panel-sort">
        <div
          onClick={() => dispatch(receivePartDeck("HEARTS"))}
          className="controll-panel-sort-item"
        >
          <img src={heart} alt="heart" />
        </div>
        <div
          onClick={() => dispatch(receivePartDeck("CLUBS"))}
          className="controll-panel-sort-item"
        >
          <img src={clubs} alt="clubs" />
        </div>
        <div
          onClick={() => dispatch(receivePartDeck("DIAMONDS"))}
          className="controll-panel-sort-item"
        >
          <img src={diamonds} alt="diamonds" />
        </div>
        <div
          onClick={() => dispatch(receivePartDeck("SPADES"))}
          className="controll-panel-sort-item"
        >
          <img src={spade} alt="spade" />
        </div>
      </div>
    </div>
  );
};

export default ControllPanel;
