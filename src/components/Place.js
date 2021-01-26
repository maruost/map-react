import React from "react";
import StarRatings from "react-star-ratings";

export default function Place(props) {
  return (
    <div
      className="places-list__point"
      onClick={(e) => {
        e.preventDefault();
        props.onSelect(props.point);
      }}
    >
      <p className="places-list__name">{props.name}</p>
      <div className="places-list__rating">
        <p className="places-list__rate">{props.rating}</p>
        <StarRatings
          rating={props.rating}
          starRatedColor="rgb(196, 196, 196)"
          starEmptyColor="rgb(109, 122, 130)"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="3px"
        />
      </div>
    </div>
  );
}
