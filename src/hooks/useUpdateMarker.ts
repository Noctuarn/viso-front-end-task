import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useUpdateMarker = () => {
  const updateMarkerById = async (
    markerId: string,
    newLat: number,
    newLng: number
  ) => {
    try {
      await updateDoc(doc(db, "markers", markerId), {
        Location: { Lat: newLat, Long: newLng },
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return { updateMarkerById };
};
