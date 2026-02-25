import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { storeSave } from '../../../../services/Store';
import { getStoreSave, setStoreSave } from '../../../Reducer/Store/Store';
const storeSaveRequest = (request) => {
  const response = storeSave(request);
  return response;
};

export function* handleStoreSave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreSave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeSaveRequest, payload);
      const { data = {} } = response;
      yield put(setStoreSave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    // eslint-disable-next-line no-debugger

    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreSaveSaga() {
  yield takeLatest(getStoreSave.type, handleStoreSave);
}
