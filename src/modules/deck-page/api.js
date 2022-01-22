import http from "../../http";
import { API_URL } from "../../config";

export const getDeckAPI = () => http.get(API_URL);
