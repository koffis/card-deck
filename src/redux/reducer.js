import { combineReducers } from "redux";
import deckReducer from "../modules/deck-page/reducers/deckReducer";

/**
 * @desc Reducer function that invokes every reducer inside the passed object.
 * @const
 * @type {object}
 */
const rootReducer = combineReducers({
  deck: deckReducer,
});

export default rootReducer;
