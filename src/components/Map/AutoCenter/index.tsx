import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { getTwoFurthestPoints } from "../../../helpers/furthestPoints";
import { IPath } from "../../../types/common";

interface IMapAutoCenterProps {
  path: IPath | null;
}

export const MapAutoCenter: React.FC<IMapAutoCenterProps> = (props) => {
  const { path } = props;

  const map = useMap();

  useEffect(() => {
    if (!path?.[0]) return;

    map.flyToBounds(getTwoFurthestPoints(path), { duration: 1.5 });
  }, [path, map]);

  return null;
};
