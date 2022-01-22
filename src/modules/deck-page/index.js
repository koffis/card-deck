import { useEffect } from "react";
import { receiveDeck } from "./actions/deckActions";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "./components/CardItem";

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

  console.log(deck);

  return <div className="deck">{cardsList}</div>;
};

export default DeckPage;
