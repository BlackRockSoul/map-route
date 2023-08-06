import L from "leaflet";
import React from "react";
import { Marker, Polyline, Tooltip } from "react-leaflet";
import { IPath } from "../../../types/common";

/* #region Leaflet marker fix */

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

/* #endregion */

interface IMapRouteProps {
  path: IPath | undefined | null;
  polyline: IPath | null;
}

export const MapRoute: React.FC<IMapRouteProps> = (props) => {
  const { path, polyline } = props;

  return (
    <>
      {path?.map((point, idx) => (
        <Marker key={point.join("-")} position={point}>
          <Tooltip>{idx + 1}</Tooltip>
        </Marker>
      ))}

      {!!polyline?.length && (
        <Polyline color={"red"} opacity={0.7} weight={6} positions={polyline} />
      )}
    </>
  );
};
