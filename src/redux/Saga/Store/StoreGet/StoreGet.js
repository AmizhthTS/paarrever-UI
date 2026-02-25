import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { getStoreGet, setStoreGet } from '../../../Reducer/Store/Store';
import { storeGet } from '../../../../services/Store';
const storeGetRequest = (request) => {
  const response = storeGet(request);
  return response;
};

export function* handleStoreGet(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreGet(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeGetRequest, payload);
      const { data = {} } = response;
      yield put(setStoreGet(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreGetSaga() {
  yield takeLatest(getStoreGet.type, handleStoreGet);
}
