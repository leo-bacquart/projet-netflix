import * as React from "react";
import "../style/PlayButton.scss";
import Play from "../assets/Play_button.svg";

const PlayButton = () => {
  return (
    <button className={'regarder'}>
      <img src={Play} alt="bouton play" className="play-icon" />
      <text>Regarder maintenant</text>
    </button>
  );
};

export default PlayButton;
