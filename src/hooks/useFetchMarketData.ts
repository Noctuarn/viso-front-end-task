import { useEffect, useState, useCallback } from "react";
import { IMarkerData } from "../types/MarkerData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useFetchMarkerData = () => {
  const [markersData, setMarkersData] = useState<IMarkerData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMarkers = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "markers"));
      const markers = querySnapshot.docs.map((doc) => ({
        Location: doc.data().Location,
        Timestamp: doc.data().Timestamp,
        id: doc.id,
      }));
      setMarkersData(markers);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMarkers();
  }, [fetchMarkers]);

  return { markersData, fetchMarkers, loading };
};