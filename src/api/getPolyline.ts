import axios from "axios";
import { IApiPolyline } from "../types/api/polyline";
import { IPath } from "../types/common";

export const getPolyline = async (path: IPath): Promise<IApiPolyline> => {
  const pathString = getPathString(path);

  const url = `http://router.project-osrm.org/route/v1/driving/${pathString}?steps=true&geometries=geojson&overview=full`;

  const { data } = await axios.get<IApiPolyline>(url);

  return data;
};

const getPathString = (path: IPath): string =>
  path.map((coordinates) => coordinates.slice().reverse().join(",")).join(";");
