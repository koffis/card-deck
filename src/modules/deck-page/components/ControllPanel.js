import { useDispatch } from "react-redux";
import { receiveDeck } from "./../actions/deckActions";
import { shuffle } from "./../actions/deckActions";

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
    </div>
  );
};

export default ControllPanel;
