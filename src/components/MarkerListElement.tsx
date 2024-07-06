import { FaTrashAlt } from "react-icons/fa";
import { IMarkerData } from "../types/MarkerData";

type Props = {
  markerData: IMarkerData;
  i: number;
  handleMarkerDelete: (id: string) => void;
};

const MarkerListElement = ({ markerData: { Location, id }, i, handleMarkerDelete }: Props) => {

  const handleDeleteClick = () => {
    handleMarkerDelete(id); 
  };

  return (
    <li key={id} className="marker-list-element">
      <div>
        Маркер №{i + 1}) <span>Довгота - {Location.Long}</span>{" "}
        <span>Широта - {Location.Lat}</span>
      </div>
      <button onClick={handleDeleteClick}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default MarkerListElement;