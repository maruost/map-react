import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import backImage from "../vendor/images/boat.jpg";

export default function Intro() {
  const { url } = useRouteMatch();

  return (
    <div className="intro">
      <div className="intro__image">
        <div className="intro__wrapper">
          <h1 className="intro__title">
            Туристические <br />
            <span>точки притяжения</span> Калининграда
          </h1>
          <NavLink exact to={process.env.PUBLIC_URL + "/map"}>
            <button className="button button_size_big">Перейти к карте</button>
          </NavLink>
        </div>
        <img className="intro__back" src={backImage} alt="boat" />
      </div>
    </div>
  );
}
