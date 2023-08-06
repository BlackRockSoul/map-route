import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IApiRouteList } from "../../types/api/route";

export interface IRouteListState {
  isLoading: boolean;
  isError: boolean;
  data: IApiRouteList;
  selectedRouteId: IApiRouteList[number]["id"] | null;
}

const initialState: IRouteListState = {
  isLoading: true,
  isError: false,
  data: [],
  selectedRouteId: null,
};

export const routeListSlice = createSlice({
  name: "routeList",
  initialState,
  reducers: {
    getRouteList: (state) => {
      state = initialState;
    },
    getRouteListSuccess: (state, { payload }: PayloadAction<IApiRouteList>) => {
      state.isLoading = false;
      state.isError = false;
      state.data = payload;
      state.selectedRouteId = null;
    },
    getRouteListError: (state) => {
      state = initialState;
      state.isLoading = false;
      state.isError = true;
    },
    selectRoute: (
      state,
      { payload }: PayloadAction<IRouteListState["selectedRouteId"]>
    ) => {
      if (payload === state.selectedRouteId) state.selectedRouteId = null;
      else state.selectedRouteId = payload;
    },
  },
});

export const Actions = routeListSlice.actions;

export const routeListSliceReducer = routeListSlice.reducer;

export default routeListSlice;
