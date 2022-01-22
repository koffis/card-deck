import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import home from "../../../assets/images/home.png";

/**
 * @desc Component "Controll Panel".
 * @return {JSX.Element} - component that render panel to controll game.
 */
const ControllPanel = ({ setGame }) => {
  return (
    <div className="controll-panel">
      <Link className="controll-panel-home" to="/">
        <img src={home} alt="home" />
      </Link>
      <button onClick={() => setGame(true)}>Start game</button>
      <button>One More</button>
      <button onClick={() => setGame(false)}>Stop Game</button>
    </div>
  );
};

export default ControllPanel;
