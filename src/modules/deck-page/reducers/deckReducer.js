import { GET_DECK_REQUEST, GET_DECK_SUCCESS, GET_DECK_FAILURE } from "../const";

const initialState = {
  cards: [],
  loading: false,
};

/**
 * @desc Handlers of payment reducer for changin sign in state.
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
  DEFAULT: (state) => state,
};

/**
 * @desc [Reducer] Function for changing sign in global state.
 * Pass state, action
 * @param state {object} - object with current info about sign in logic
 * @param action {object} - instructions for changing sign in global state
 * @return {object} -  updated object with current info about sign in logic
 */
const deckReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default deckReducer;
