import { IPath, ICoordinates } from "../common";

export interface IApiPolyline {
  code: string;
  routes: IApiPolylineRoute[];
  waypoints: IApiPolylineWaypoint[];
}

export interface IApiPolylineRoute {
  legs: IApiPolylineRouteLeg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  geometry: IApiPolylineRouteGeometry;
}

export interface IApiPolylineRouteLeg {
  steps: [];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface IApiPolylineRouteGeometry {
  type: string;
  coordinates: IPath;
}

export interface IApiPolylineWaypoint {
  hint: string;
  distance: number;
  name: string;
  location: ICoordinates;
}
