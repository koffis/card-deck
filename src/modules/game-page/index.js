import { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";

import UserHand from "./components/UserHand";
import OpponentHand from "./components/OpponentHand";
import Cards from "./components/Cards";

import { shuffleFunc } from "../../utils";

import "./index.scss";
import ControllPanel from "./components/ControllPanel";

const GamePage = memo(() => {
  /**
   * @desc [Hook selector] Take data about cards from the `deck` reducer.s
   */
  let deck = shuffleFunc(useSelector((state) => state.deck.cards));

  /**
   * @desc [Hook State] Displays game status.
   * @const
   * @type {array}
   * @property {string} 0 - state
   * @property {function} 1 - function for changing state
   * @default
   */
  const [game, setGame] = useState(false);

  /**
   * @desc [Hook State] Displays user current cards.
   * @const
   * @type {array}
   * @property {string} 0 - state
   * @property {function} 1 - function for changing state
   * @default
   */
  const [userHand, setUserHand] = useState([]);

  /**
   * @desc [Hook State] Displays opponent current cards.
   * @const
   * @type {array}
   * @property {string} 0 - state
   * @property {function} 1 - function for changing state
   * @default
   */
  const [opponentHand, setOpponentHand] = useState([]);

  /**
   * @desc [Hook effect] Receive cards deck on mount.
   */
  useEffect(() => {
    if (game) {
      setUserHand(deck.splice(0, 2));
      setOpponentHand(deck.splice(0, 2));
      console.log(deck, 58);
    }
  }, [game]);

  return (
    <div className="game">
      <OpponentHand game={game} opponentHand={opponentHand} />
      <Cards remain={deck.length} />
      <UserHand userHand={userHand} />
      <ControllPanel setGame={setGame} />
    </div>
  );
});

export default GamePage;
