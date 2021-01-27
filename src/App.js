import React from "react";
import Map from "./components/Map";
import * as points from "./data/points.json";
import { Route } from "react-router-dom";
import Intro from "./components/Intro";
import PlacesList from "./components/PlacesList";

export default function App() {
  const [selectedPoint, setSelectedPoint] = React.useState(null);

  function handlePoints(point) {
    setSelectedPoint(point);
  }

  return (
    <div className="App">
      <Route exact path={process.env.PUBLIC_URL + "/"}>
        <Intro />
      </Route>
      <Route exact path={process.env.PUBLIC_URL + "/map"}>
        <div className="map-page">
          <PlacesList points={points.features} onSelect={handlePoints} />
          <Map
            onSelect={handlePoints}
            points={points.features}
            selectedPoint={selectedPoint}
          ></Map>
        </div>
      </Route>
    </div>
  );
}
