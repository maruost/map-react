import React from "react";
import Place from "./Place";

export default function PlacesList(props) {
  return (
    <div className="places-list">
      {props.points.map((point, i) => {
        return (
          <Place
            key={i}
            name={point.properties.name}
            rating={point.properties.rating}
            onSelect={props.onSelect}
            point={point}
          />
        );
      })}
    </div>
  );
}
