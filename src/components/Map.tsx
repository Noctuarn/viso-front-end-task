import MapGl from "react-map-gl";
import { MapMouseEvent } from "mapbox-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  
  const [viewport, setViewport] = useState({
    longitude: 32.0,
    latitude: 49.0,
    zoom: 5,
  });
  
  return (
    <div>
      <MapGl
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN_API}
        style={{ width: "100vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        doubleClickZoom={false}
      ></MapGl>
    </div>
  )
}

export default Map