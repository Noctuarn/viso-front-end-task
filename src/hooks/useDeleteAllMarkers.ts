import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useDeleteAllMarkers = () => {

  const deleteAllMarkers = async () => {
    const querySnapshot = await getDocs(collection(db, "markers"));
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  return { deleteAllMarkers };
};
