import {
  GET_DECK_REQUEST,
  GET_DECK_SUCCESS,
  GET_DECK_FAILURE,
  SUIT_IN_A_ROW,
  SHUFFLE_DECK,
  DELETE_CARD,
} from "../const";

import { shuffleFunc, deleteCardFunc, sortSuitFunc } from "../../../utils";

/**
 * @desc Initial state of deck reducer.
 * @const
 * @type {object}
 * @default
 */
const initialState = {
  cards: [],
  loading: false,
};

/**
 * @desc Handlers of deck reducer for changin state.
 * @const
 * @type {object}
 */
const handlers = {
  [GET_DECK_REQUEST]: (state) => ({ ...state, loading: true }),
  [GET_DECK_SUCCESS]: (state, { payload: { cards } }) => ({
    ...state,
    loading: false,
    cards,
  }),
  [GET_DECK_FAILURE]: (state) => ({ ...state, loading: false }),
  [SHUFFLE_DECK]: (state) => ({
    ...state,
    loading: false,
    cards: shuffleFunc(state.cards),
  }),
  [SUIT_IN_A_ROW]: (state) => ({
    ...state,
    loading: false,
    cards: sortSuitFunc(state.cards),
  }),
  [DELETE_CARD]: (state, { payload: { code } }) => ({
    ...state,
    loading: false,
    cards: deleteCardFunc(state.cards, code),
  }),
  DEFAULT: (state) => state,
};

/**
 * @desc [Reducer] Function for changing deck global state.
 * Pass state, action
 * @param {object} state - object with current info about deck logic
 * @param {object} action - instructions for changing deck global state
 * @return {object} - updated object with current info about deck
 */
const deckReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default deckReducer;
