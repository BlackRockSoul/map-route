import * as Select from "./selectors";
import * as Sagas from "./sagas";
import * as Slice from "./slice";

export const RouteStore = {
  ...Slice,
  Select,
  Sagas,
};
