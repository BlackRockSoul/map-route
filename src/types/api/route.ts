import { IPath } from "../common";

export type IApiRouteList = IApiRoute[];

export interface IApiRoute {
  id: number;
  name: string;
  path: IPath;
}
