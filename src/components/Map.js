import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import pinIcon from "../vendor/images/pin.png";
import pinIconGrey from "../vendor/images/pin-grey.png";
import StarRatings from "react-star-ratings";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map(props) {
  const [viewport, setViewport] = React.useState({
    latitude: 54.710157,
    longitude: 20.510137,
    width: "100%",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibWFsaXNoYTEzIiwiYSI6ImNrazl3ZDl3cDExeHYybm12bW9pbnhlMjYifQ.mmcm2tVLlFcZ6cxRe7CRUg"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/malisha13/ckkcvb79x2df017o5pqmotr5g"
      >
        {props.points.map((point, i) => (
          <Marker
            key={i}
            latitude={point.geometry.coordinates[1]}
            longitude={point.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                props.onSelect(point);
              }}
            >
              <img
                className="pin-icon"
                src={point === props.selectedPoint ? pinIcon : pinIconGrey}
                alt="Place Icon"
              />
            </button>
          </Marker>
        ))}
        {props.selectedPoint ? (
          <Popup
            latitude={props.selectedPoint.geometry.coordinates[1]}
            longitude={props.selectedPoint.geometry.coordinates[0]}
            onClose={() => {
              props.onSelect(null);
            }}
          >
            <div>
              <h2 className="popup__point-name">
                {props.selectedPoint.properties.name}
              </h2>
              <div className="popup__point-rating">
                <p className="popup__point-rate">
                  {props.selectedPoint.properties.rating}
                </p>
                <StarRatings
                  rating={props.selectedPoint.properties.rating}
                  starRatedColor="rgb(109, 122, 130)"
                  numberOfStars={5}
                  name="rating"
                  starDimension="12px"
                  starSpacing="1px"
                />
              </div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
