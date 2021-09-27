import {
  put,
  call,
  takeEvery,
  ForkEffect,
} from 'redux-saga/effects';
import { fetchThemeAsync } from '../api/theemesApi';
import {
  loadingButton,
  UnLoadingButton,
} from './buttons/actions';
import {
  hideLoader,
  showLoader,
} from './themes/actions';

import {
  FetchThemeActionsType,
  RequestThemeActionsInterface,
} from './themes/interface';

type TPayload = ReturnType<typeof fetchThemeAsync>;

export function* sagaWatcher(): Generator<ForkEffect> {
  yield takeEvery(FetchThemeActionsType.REQUEST_THEMES, sagaWorker);
}

function* sagaWorker(action: RequestThemeActionsInterface) {
  try {
    yield put(showLoader());
    yield put(loadingButton(action.payload));
    const payload: TPayload = yield call(() => fetchThemeAsync(action.payload));
    yield put({
      type: FetchThemeActionsType.FETCH_THEME,
      payload,
    });
    yield put(hideLoader());
    yield put(UnLoadingButton(action.payload));
  } catch (e) {
    yield put(hideLoader());
    yield put(UnLoadingButton(action.payload));
  }
}
