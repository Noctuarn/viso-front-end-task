import { Marker } from 'react-map-gl';

type Props = {
  id: string
  lat: number,
  long: number
  point_count: number;
};

const ClusterMarker = ({ id, lat, long, point_count }: Props) => {
  return (
    <Marker
      key={id}
      latitude={lat}
      longitude={long}
    >
      <div className='cluster-markers'>{point_count}</div>
    </Marker>
  );
};

export default ClusterMarker;