import { useEffect } from "react";
import { receiveDeck } from "./actions/deckActions";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "./components/CardItem";
import ControllPanel from "./components/ControllPanel";

import "./index.scss";

const DeckPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveDeck());
  }, []);

  const deck = useSelector((state) => state.deck.cards);

  const cardsList = deck.map((card, index) => (
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
