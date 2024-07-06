import { IMarkerData } from "../types/MarkerData";
import { Marker } from "react-map-gl";

const MapMarker = ({ id, Location: { Lat, Long } }: IMarkerData) => {
  return (
    <Marker
      key={id}
      latitude={Lat}
      longitude={Long}
      color={`red`}
      draggable
    ></Marker>
  );
};

export default MapMarker;
