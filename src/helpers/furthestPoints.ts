import { ICoordinates, IPath } from "../types/common";

const getDistance = (p1: ICoordinates, p2: ICoordinates): number => {
  const x = p1[0] - p2[0];
  const y = p1[1] - p2[1];

  return x * x + y * y;
};

export const getTwoFurthestPoints = (
  path: IPath
): [ICoordinates, ICoordinates] => {
  const len = path.length;

  let result: [ICoordinates, ICoordinates] = [path[0], path[0]];
  if (len === 1) return result;

  let maxDistance = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const dist = getDistance(path[i], path[j]);

      if (dist > maxDistance) {
        maxDistance = dist;
        result = [path[i], path[j]];
      }
    }
  }

  return result;
};
