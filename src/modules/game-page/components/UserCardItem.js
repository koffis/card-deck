/**
 * @desc Component "UserCardItem".
 * @param {string} image - contain card`s image url.
 * @param {string} code - value that contain card`s unic code.
 * @return {JSX.Element} - component that render one card.
 */
const UserCardItem = ({ image, code }) => {
  return (
    <div className="user-card-item">
      <img className="user-card-item-image" src={image} alt={code} />
    </div>
  );
};

export default UserCardItem;
