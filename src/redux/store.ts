import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { RouteStore } from "./routes";
import { PolylineStore } from "./polyline";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    routeListSliceReducer: RouteStore.routeListSliceReducer,
    polylineSliceReducer: PolylineStore.polylineSliceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
