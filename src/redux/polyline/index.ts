import * as Select from "./selectors";
import * as Sagas from "./sagas";
import * as Slice from "./slice";

export const PolylineStore = {
  ...Slice,
  Select,
  Sagas,
};
