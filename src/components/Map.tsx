import MapGl from "react-map-gl";
import { MapMouseEvent } from "mapbox-gl";
import { useEffect, useState } from "react";
import { useFetchMarkerData } from "../hooks/useFetchMarketData";

import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./MapMarker";

const Map = () => {
  const [viewport, setViewport] = useState({
    longitude: 32.0,
    latitude: 49.0,
    zoom: 5,
  });

  const { markersData, loading } = useFetchMarkerData();

  useEffect(() => {
    if (!loading) {
      console.log(markersData);
    }
  }, [loading, markersData]);

  return (
    <div>
      <MapGl
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN_API}
        style={{ width: "100vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        doubleClickZoom={false}
      >
        {markersData.map(m => (
          <MapMarker id={m.id} key={m.id} Location={m.Location} Timestamp={m.Timestamp}/>
        ))}
      </MapGl>
      {loading && <div>Loading markers...</div>}
    </div>
  );
};

export default Map;