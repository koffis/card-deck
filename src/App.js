import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";

import HomePage from "./modules/home-page";
import DeckPage from "./modules/deck-page";
import GamePage from "./modules/game-page";
import ErrorPage from "./modules/error-page";

import "./index.scss";

const { root, deck, game, error } = ROUTES;

/**
 * @desc component "App".
 * @return {JSX.Element} - main component with routing
 */
const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={deck} component={DeckPage} />
      <Route exact path={game} component={GamePage} />
      <Route exact path={error} component={ErrorPage} />
    </Switch>
  );
};

export default App;
