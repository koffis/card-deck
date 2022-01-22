import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cards from "../../assets/images/cards.png";
import { receiveDeck } from "../deck-page/actions/deckActions";

import "./index.scss";

/**
 * @desc Module "Home page".
 * @return {JSX.Element} - module that includes a default page, when user opens the web-app
 */
const HomePage = () => {
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
    <div className="home">
      <a className="fork-me" href="https://github.com/koffis/card-deck">
        <img
          loading="lazy"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          class="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
      <div className="home-logo">
        <img src={cards} alt="cards" />
      </div>
      <Link className="home-button" to="/deck">
        Card Deck
      </Link>
      <Link className="home-button" to="/game">
        Try game (in development)
      </Link>
    </div>
  );
};

export default HomePage;
