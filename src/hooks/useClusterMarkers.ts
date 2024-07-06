import { useEffect, useRef, useState } from "react";
import Supercluster from "supercluster";
import { IMarkerData } from "../types/MarkerData";
import { IGeoJsonPointFeature } from "../types/GeoJsonPointFeature";

const useClusterMarkers = (markersData: IMarkerData[], viewport: any) => {
  const [clusters, setClusters] = useState<IGeoJsonPointFeature[]>([]);
  const superclusterRef = useRef<any>(
    new Supercluster({
      radius: 40,
      maxZoom: 40,
    })
  );

  useEffect(() => {
    const points = markersData.map((m, index) => ({
      type: "Feature",
      properties: { cluster: false, index },
      geometry: {
        type: "Point",
        coordinates: [m.Location.Long, m.Location.Lat],
      },
    }));

    superclusterRef.current.load(points);

    const padding = 20;
    const bbox: [number, number, number, number] = [
      viewport.longitude - 360 / Math.pow(2, viewport.zoom) - padding,
      viewport.latitude - 180 / Math.pow(2, viewport.zoom) - padding,
      viewport.longitude + 360 / Math.pow(2, viewport.zoom) + padding,
      viewport.latitude + 180 / Math.pow(2, viewport.zoom) + padding,
    ];

    const clusters = superclusterRef.current.getClusters(
      bbox,
      Math.floor(viewport.zoom)
    ).map((cluster: any) => ({
      type: "Feature",
      properties: cluster.properties,
      geometry: {
        type: "Point",
        coordinates: cluster.geometry.coordinates,
      },
    }));
    setClusters(clusters);
  }, [markersData, viewport]);

  return { clusters };
};

export default useClusterMarkers;