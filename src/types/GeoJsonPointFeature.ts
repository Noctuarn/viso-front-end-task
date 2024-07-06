export interface IGeoJsonPointFeature{
    type: "Feature";
    properties: {
      cluster: boolean;
      index: number;
      point_count: number
    };
    geometry: {
      type: "Point";
      coordinates: [number, number];
    };
  };