import { getDeckAPI } from "../api";
import { GET_DECK_REQUEST, GET_DECK_SUCCESS, GET_DECK_FAILURE } from "../const";

const request = () => ({ type: GET_DECK_REQUEST });

const success = (cards) => ({
  type: GET_DECK_SUCCESS,
  payload: { cards },
});

const failure = () => ({ type: GET_DECK_FAILURE });

export const receiveDeck = () => async (dispatch) => {
  dispatch(request());
  try {
    const { data: receiveDeckData } = await getDeckAPI();
    const { cards } = receiveDeckData;

    dispatch(success(cards));
  } catch (e) {
    // TODO - handle this errors
    //handleErrors(e, receiveProfileData.bind(null));

    dispatch(failure());
  }
};
