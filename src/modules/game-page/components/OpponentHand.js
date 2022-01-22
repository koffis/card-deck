import OppponentCardItem from "./OpponentCardItem";

const OpponentHand = ({ opponentHand, game }) => {
  const opponentList = opponentHand.map((card) => (
    <OppponentCardItem
      key={card.code}
      image={card.image}
      code={card.code}
      gameStatus={game}
    />
  ));
  return (
    <div className="opponent">
      <div className="opponent-hand">
        <div className="opponent-hand-cards">{opponentList}</div>
      </div>
    </div>
  );
};

export default OpponentHand;
