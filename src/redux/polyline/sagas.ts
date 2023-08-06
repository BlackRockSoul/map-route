import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { PolylineStore } from ".";
import { getPolyline } from "../../api/getPolyline";
import { ICoordinates, IPath } from "../../types/common";

function* fetchPolyline({ payload }: PayloadAction<IPath | null>) {
  if (payload === null)
    return put(PolylineStore.Actions.getPolylineSuccess(null));

  try {
    const { routes }: Awaited<ReturnType<typeof getPolyline>> = yield call(
      getPolyline,
      payload
    );

    const path =
      (routes?.[0].geometry.coordinates.map<ICoordinates>(
        (coordinates) => coordinates.slice().reverse() as ICoordinates
      ) as IPath) ?? null;

    yield put(PolylineStore.Actions.getPolylineSuccess(path));
  } catch (e) {
    console.error(e);

    yield put(PolylineStore.Actions.getPolylineError());
  }
}

export function* watchFetchPolylineSaga() {
  yield takeLatest(PolylineStore.Actions.getPolyline.type, fetchPolyline);
}
