import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPath } from "../../types/common";

export interface IPolylineState {
  isLoading: boolean;
  isError: boolean;
  data: IPath | null;
}

const initialState: IPolylineState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const polylineSlice = createSlice({
  name: "Polyline",
  initialState,
  reducers: {
    getPolyline: (state, _: PayloadAction<IPath | null>) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    },
    getPolylineSuccess: (
      state,
      { payload }: PayloadAction<IPolylineState["data"]>
    ) => {
      state.isLoading = false;
      state.isError = false;
      state.data = payload;
    },
    getPolylineError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.data = null;
    },
  },
});

export const Actions = polylineSlice.actions;

export const polylineSliceReducer = polylineSlice.reducer;

export default polylineSlice;
