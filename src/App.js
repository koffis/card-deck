import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTES } from "./config";
import { receiveDeck } from "./modules/deck-page/actions/deckActions";

import HomePage from "./modules/home-page";
import DeckPage from "./modules/deck-page";
import GamePage from "./modules/game-page";

import "./index.scss";

const { root, deck, game } = ROUTES;

/**
 * @desc component "App".
 * @return {JSX.Element} - main component with routing
 */
const App = () => {
  /**
   * @desc [Hook dispatch] Function for dispatching Redux actions.
   * Pass action
   * @param action {object} - instructions for changing data within Redux store
   * @return {void}
   */
  const dispatch = useDispatch();

  /**
   * @desc [Hook effect] Receive cards deck on mount.
   */
  useEffect(() => {
    dispatch(receiveDeck());
  }, [dispatch]);
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={deck} component={DeckPage} />
      <Route exact path={game} component={GamePage} />
    </Switch>
  );
};

export default App;
