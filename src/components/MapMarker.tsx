import { IMarkerData } from "../types/MarkerData";
import { Marker } from "react-map-gl";

type Props = {
  markerData: IMarkerData;
  handleMarkerUpdate: (markerId: string, newLat: number, newLng: number) => void;
};

const MapMarker = ({
  markerData: { id, Location: { Lat, Long }},
  handleMarkerUpdate,
}: Props) => {
  return (
    <Marker
      key={id}
      latitude={Lat}
      longitude={Long}
      color={`red`}
      draggable
      onDragEnd={async (e: any) => {
        const newLat = e.lngLat.lat;
        const newLng = e.lngLat.lng;
        handleMarkerUpdate(id, newLat, newLng);
      }}
    ></Marker>
  );
};

export default MapMarker;
