import { useState, useEffect } from "react";
import UserCardItem from "./UserCardItem";

const UserHand = ({ userHand }) => {
  let userCards = userHand.map((card) => (
    <UserCardItem key={card.code} image={card.image} code={card.code} />
  ));

  const valueArray = userHand.map((card) => {
    if (card.value === 11) {
      card.value = 2;
    } else if (card.value === 12) {
      card.value = 3;
    } else if (card.value === 13) {
      card.value = 4;
    } else if (card.value === 14) {
      card.value = 1;
    }
    return card;
  });

  let points = 0;
  for (let i = 0; i < valueArray.length; i++) {
    points += +valueArray[i].value;
  }

  return (
    <div className="user">
      <h2>You have: {points}</h2>
      <div className="user-hand">{userCards}</div>
    </div>
  );
};

export default UserHand;
