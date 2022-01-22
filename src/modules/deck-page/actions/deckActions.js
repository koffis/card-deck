import { getDeckAPI } from "../api";
import {
  GET_DECK_REQUEST,
  GET_DECK_SUCCESS,
  GET_DECK_FAILURE,
  SHUFFLE_DECK,
  DELETE_CARD,
} from "../const";

const request = () => ({ type: GET_DECK_REQUEST });

const success = (cards) => ({
  type: GET_DECK_SUCCESS,
  payload: { cards },
});

const failure = () => ({ type: GET_DECK_FAILURE });

export const shuffle = () => ({ type: SHUFFLE_DECK });

export const deleteCard = (code) => ({ type: DELETE_CARD, payload: { code } });

export const receiveDeck = () => async (dispatch) => {
  dispatch(request());
  try {
    const { data: receiveDeckData } = await getDeckAPI();
    const { cards } = receiveDeckData;
    const sortedCards = cards
      .map((card) => {
        if (card.value === "JACK") {
          card.value = 11;
        } else if (card.value === "QUEEN") {
          card.value = 12;
        } else if (card.value === "KING") {
          card.value = 13;
        } else if (card.value === "ACE") {
          card.value = 14;
        }
        return card;
      })
      .sort((a, b) => +a.value - +b.value);

    dispatch(success(sortedCards));
  } catch (e) {
    // TODO - handle this errors
    dispatch(failure());
  }
};

export const receivePartDeck = (suit) => async (dispatch) => {
  dispatch(request());
  try {
    const { data: receiveDeckData } = await getDeckAPI();
    const { cards } = receiveDeckData;
    const sortedCards = cards
      .map((card) => {
        if (card.value === "JACK") {
          card.value = 11;
        } else if (card.value === "QUEEN") {
          card.value = 12;
        } else if (card.value === "KING") {
          card.value = 13;
        } else if (card.value === "ACE") {
          card.value = 14;
        }
        return card;
      })
      .sort((a, b) => +a.value - +b.value)
      .filter((card) => card.suit === suit);

    dispatch(success(sortedCards));
  } catch (e) {
    // TODO - handle this errors
    dispatch(failure());
  }
};
