import { getDeckAPI } from "../api";
import {
  GET_DECK_REQUEST,
  GET_DECK_SUCCESS,
  GET_DECK_FAILURE,
  SUIT_IN_A_ROW,
  SHUFFLE_DECK,
  DELETE_CARD,
} from "../const";

/**
 * @desc [Action] Function for creation `receive deck` request action.
 * @return {object} - object with `receive deck` request action type.
 */
const request = () => ({ type: GET_DECK_REQUEST });

/**
 * @desc [Action] Function for creation `receive deck` success action.
 * @param {object} cards - object that contain cards data.
 * @return {object} - object with `receive deck` success action type.
 */
const success = (cards) => ({
  type: GET_DECK_SUCCESS,
  payload: { cards },
});

/**
 * @desc [Action] Function for creation `receive deck` failure action.
 * @return {object} - object with `receive deck` failure action type.
 */
const failure = () => ({ type: GET_DECK_FAILURE });

/**
 * @desc [Action] Function for creation `deck shuffle` action.
 * @return {object} - object with `deck shuffle` action type.
 */
export const shuffle = () => ({ type: SHUFFLE_DECK });

/**
 * @desc [Action] Function for `delete card` action.
 * @param {string} code - string that contain card unic code.
 * @return {object} - object with `delete card` action type.
 */
export const deleteCard = (code) => ({ type: DELETE_CARD, payload: { code } });

/**
 * @desc [Action] Function for `sort suit` action.
 * @return {object} - object with `sort suit` action type.
 */
export const sortSuit = () => ({ type: SUIT_IN_A_ROW });

/**
 * @desc [Async Action] Function for creation `receive deck` general action.
 * @return {function} - async function for creation `receive deck` general action with thunk help.
 */
export const receiveDeck = () => async (dispatch) => {
  dispatch(request());
  try {
    const { data: receiveDeckData } = await getDeckAPI();
    const { cards } = receiveDeckData;

    /**
     * @des Sort all cards from smallest to largest.
     * @return {array} - array with sorted cards.
     */
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

/**
 * @desc [Async Action] Function for creation `receive part deck` general action.
 * @param {string} suit - string that contain card suit.
 * @return {function} - async function for creation `receive deck` general action with thunk help.
 */
export const receivePartDeck = (suit) => async (dispatch) => {
  dispatch(request());
  try {
    const { data: receiveDeckData } = await getDeckAPI();
    const { cards } = receiveDeckData;

    /**
     * @des Sort all cards from smallest to largest with one suit.
     * @return {array} - array with sorted cards with one suit.
     */
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
