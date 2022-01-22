import { useEffect } from "react";
import { receiveDeck } from "./actions/deckActions";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "./components/CardItem";
import ControllPanel from "./components/ControllPanel";

import "./index.scss";

/**
 * @desc Module "Deck Page".
 * @return {JSX.Element} - module that includes a page, with 52 cards and controll panel to handle them.
 */
const DeckPage = () => {
  /**
   * @desc [Hook dispatch] Function for dispatching Redux actions.
   * Pass action
   * @param action {object} - instructions for changing data within Redux store
   * @return {void}
   */
  const dispatch = useDispatch();

  /**
   * @desc [Hook effect] Receive cards deck on mount.
   */
  useEffect(() => {
    dispatch(receiveDeck());
  }, [dispatch]);

  /**
   * @desc [Hook selector] Take data about cards from the `deck` reducer.
   */
  const deck = useSelector((state) => state.deck.cards);

  /**
   * @desc Variable that contain list of CardItem components with data from the reducer
   * @return {array}
   */
  const cardsList = deck.map((card) => (
    <CardItem key={card.code} image={card.image} code={card.code} />
  ));

  return (
    <div className="deck">
      {cardsList}
      <ControllPanel />
    </div>
  );
};

export default DeckPage;
