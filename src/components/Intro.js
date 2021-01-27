import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
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
      </div>
    </div>
  );
}
