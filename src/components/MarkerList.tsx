import { IMarkerData } from "../types/MarkerData";
import MarkerListElement from "./MarkerListElement";

type Props = {
  data: IMarkerData[];
  handleMarkerDelete: (id: string) => void;
  handleAllMarkersDelete: () => void;
};

const MarkerList = ({
  data,
  handleMarkerDelete,
  handleAllMarkersDelete,
}: Props) => {
  if (data.length === 0) {
    return <h4 className="marker-list-message">У вас немає жодних маркерів...</h4>;
  }

  return (
    <div className="marker-list-wrapper">
      <ul className="marker-list">
        {data.map((md, i) => (
          <MarkerListElement
            handleMarkerDelete={() => {
              handleMarkerDelete(md.id);
            }}
            key={md.id}
            i={i}
            markerData={md}
          />
        ))}
      </ul>
      <button onClick={handleAllMarkersDelete} className="marker-list-delete">
        Delete all markers
      </button>
    </div>
  );
};

export default MarkerList;
