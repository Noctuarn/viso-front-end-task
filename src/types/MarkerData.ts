interface ILocation {
    Lat: number;
    Long: number;
  }
  
export  interface IMarkerData {
    Location: ILocation;
    Timestamp: string;
    id: string;
  }