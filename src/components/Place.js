import React from "react";
import StarRatings from "react-star-ratings";

export default function Place(props) {
  return (
    <div className="places-list__point">
      <p className="places-list__name">{props.name}</p>
      <StarRatings
        rating={props.rating}
        starRatedColor="blue"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="5px"
      />
    </div>
  );
}
