import { useDispatch } from "react-redux";
import {
  receiveDeck,
  shuffle,
  receivePartDeck,
} from "./../actions/deckActions";
import heart from "../../../assets/images/hearts.png";
import clubs from "../../../assets/images/clubs.png";
import diamonds from "../../../assets/images/diamonds.png";
import spade from "../../../assets/images/spade.png";

const ControllPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="controll-panel">
      <button onClick={() => dispatch(receiveDeck())}>Receive</button>
      <button
        onClick={() => {
          dispatch(shuffle());
        }}
      >
        Shuffle
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
