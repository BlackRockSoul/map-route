import { call, put, takeLatest } from "redux-saga/effects";
import { RouteStore } from ".";
import { getRouteList } from "../../api/getRouteList";

function* fetchRouteList() {
  try {
    const routeList: Awaited<ReturnType<typeof getRouteList>> = yield call(
      getRouteList
    );

    yield put(RouteStore.Actions.getRouteListSuccess(routeList));
  } catch (e) {
    console.error(e);

    yield put(RouteStore.Actions.getRouteListError());
  }
}

export function* watchFetchRouteListSaga() {
  yield takeLatest(RouteStore.Actions.getRouteList.type, fetchRouteList);
}
