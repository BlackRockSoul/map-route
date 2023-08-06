import { RootState } from "../../types/redux";

export const data = (state: RootState) => state.routeListSliceReducer.data;

export const isLoading = (state: RootState) =>
  state.routeListSliceReducer.isLoading;

export const isError = (state: RootState) =>
  state.routeListSliceReducer.isError;

export const selectedRouteId = (state: RootState) =>
  state.routeListSliceReducer.selectedRouteId;

export const selectedRoute = (state: RootState) =>
  state.routeListSliceReducer.data.find(
    ({ id }) => id === state.routeListSliceReducer.selectedRouteId
  );
