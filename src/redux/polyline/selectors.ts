import { RootState } from "../../types/redux";

export const data = (state: RootState) => state.polylineSliceReducer.data;

export const isLoading = (state: RootState) =>
  state.polylineSliceReducer.isLoading;

export const isError = (state: RootState) => state.polylineSliceReducer.isError;
