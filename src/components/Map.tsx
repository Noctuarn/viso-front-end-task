import { useState } from "react";
import { useFetchMarkerData } from "../hooks/useFetchMarkersData";
import { useDeleteMarkerById } from "../hooks/useDeleteMarkerById";
import { useAddMarker } from "../hooks/useAddMarker";

import MapMarker from "./MapMarker";
import MarkerList from "./MarkerList";
import "mapbox-gl/dist/mapbox-gl.css";
import MapGl, { MapMouseEvent } from "react-map-gl";
import { useDeleteAllMarkers } from "../hooks/useDeleteAllMarkers";
import { useUpdateMarker } from "../hooks/useUpdateMarker";

const Map = () => {
  //* Initial viewport for the map (Ukraine)
  const [viewport, setViewport] = useState({
    longitude: 32.0,
    latitude: 49.0,
    zoom: 5,
  });

  //* Markers CRUD
  const { markersData, loading, fetchMarkers } = useFetchMarkerData();
  const { deleteMarkerHandler } = useDeleteMarkerById();
  const { addMarker } = useAddMarker();
  const { deleteAllMarkers } = useDeleteAllMarkers();
  const { updateMarkerById } = useUpdateMarker();


  //* Handlers for CRUD operations
  const handleMarkerDelete = async (markerId: string) => {
    try {
      await deleteMarkerHandler(markerId);
      await fetchMarkers();
    } catch (error) {
      console.error("Error deleting marker:", error);
    }
  };

  const handleMarkerAdd = async (e: MapMouseEvent) => {
    await addMarker(e);
    await fetchMarkers();
  };

  const handleAllMarkersDelete = async () => {
    await deleteAllMarkers();
    fetchMarkers();
  };

  const handleMarkerUpdate = async (
    markerId: string,
    newLat: number,
    newLng: number
  ) => {
    updateMarkerById(markerId, newLat, newLng);
    fetchMarkers();
  };

  return (
    <div>
      <MapGl
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN_API}
        style={{ width: "100vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        doubleClickZoom={false}
        onDblClick={handleMarkerAdd}
      >
        {markersData.map((m) => (
          <MapMarker
           handleMarkerUpdate={handleMarkerUpdate}
           markerData={m}
          />
        ))}
      </MapGl>
      {loading && <div>Loading markers...</div>}
      <MarkerList
        data={markersData}
        handleMarkerDelete={handleMarkerDelete}
        handleAllMarkersDelete={handleAllMarkersDelete}
      />
    </div>
  );
};

export default Map;
