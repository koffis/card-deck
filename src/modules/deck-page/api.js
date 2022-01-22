import http from "../../http";
import { API_URL } from "../../config";

/**
 * @desc API method for receiving cards deck.
 * @return {function} - function for making the receiving cards deck request
 */
export const getDeckAPI = () => http.get(API_URL);
