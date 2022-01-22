import UserCardItem from "./UserCardItem";

const UserHand = ({ userHand }) => {
  let userCards = userHand.map((card) => (
    <UserCardItem key={card.code} image={card.image} code={card.code} />
  ));
  return (
    <div className="user">
      <div className="user-hand">{userCards}</div>
    </div>
  );
};

export default UserHand;
