import { all, fork } from "redux-saga/effects";
import { RouteStore } from "./routes";
import { PolylineStore } from "./polyline";

export function* rootSaga() {
  yield all([
    fork(RouteStore.Sagas.watchFetchRouteListSaga),
    fork(PolylineStore.Sagas.watchFetchPolylineSaga),
  ]);
}
