import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";

import HomePage from "./modules/home-page";
import DeckPage from "./modules/deck-page";

import "./index.scss";

const { root, deck } = ROUTES;

const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={deck} component={DeckPage} />
    </Switch>
  );
};

export default App;
