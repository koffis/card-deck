import back from "../../../assets/images/back.png";

const Cards = ({ remain }) => {
  return (
    <div className="cards">
      <img src={back} alt="cards" />
      <h3>Cards: {remain}</h3>
    </div>
  );
};

export default Cards;
