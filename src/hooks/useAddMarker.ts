import { addDoc, collection } from "firebase/firestore";
import { MapMouseEvent } from "react-map-gl";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

export const useAddMarker = () => {
  const addMarker = async (e: MapMouseEvent) => {
    const { lat, lng } = e.lngLat;

    const newMarker = {
      Location: { Lat: lat, Long: lng },
      Timestamp: new Date().toISOString(),
      id: uuidv4(),
    };

    await addDoc(collection(db, "markers"), newMarker);
  };

  return { addMarker };
};
