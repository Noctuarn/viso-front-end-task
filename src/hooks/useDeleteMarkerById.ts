import { useCallback } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { useFetchMarkerData } from "./useFetchMarkersData"; 
import { db } from "../firebase";

export const useDeleteMarkerById = () => {
  const { fetchMarkers } = useFetchMarkerData();

  const deleteMarkerHandler = useCallback(async (markerId: string) => {
    try {
      await deleteDoc(doc(db, "markers", markerId));
      await fetchMarkers();
    } catch (error) {
      console.error("Error deleting marker:", error);
    }
  }, [fetchMarkers]);

  return { deleteMarkerHandler };
};