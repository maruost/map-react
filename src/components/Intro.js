import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <h1 className="intro__title">
          Туристические точки притяжения Калининграда
        </h1>
        <NavLink exact to="/map">
          <button className="button intro__button">Перейти к карте</button>
        </NavLink>
      </div>
    </div>
  );
}
