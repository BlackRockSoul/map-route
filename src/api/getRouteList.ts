import { IApiRouteList } from "../types/api/route";

const mockData: IApiRouteList = [
  {
    id: 1,
    name: "Маршрут №1",
    path: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
  },
  {
    id: 2,
    name: "Маршрут №2",
    path: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
  },
  {
    id: 3,
    name: "Маршрут №3",
    path: [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ],
  },
  {
    id: 4,
    name: "Маршрут №4",
    path: [
      [59.83567701, 30.38064206],
      [56.8519, 60.6122],
    ],
  },
];

export const getRouteList = (): Promise<IApiRouteList> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
