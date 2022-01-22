import back from "../../../assets/images/back.png";

/**
 * @desc Component "OpponentCardItem".
 * @param {string} image - contain card`s image url.
 * @param {string} code - value that contain card`s unic code.
 * @return {JSX.Element} - component that render one card.
 */
const OppponentCardItem = ({ image, code, gameStatus }) => {
  return gameStatus ? (
    <div className="user-card-item">
      <img className="user-card-item-image" src={back} alt={code} />
    </div>
  ) : (
    <div>
      <div className="user-card-item">
        <img className="user-card-item-image" src={image} alt={code} />
      </div>
    </div>
  );
};

export default OppponentCardItem;
