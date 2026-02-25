import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { storeRemove } from '../../../../services/Store';
import { getStoreRemove, setStoreRemove } from '../../../Reducer/Store/Store';
const storeRemoveRequest = (request) => {
  const response = storeRemove(request);
  return response;
};

export function* handleStoreRemove(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreRemove(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeRemoveRequest, payload);
      const { data = {} } = response;
      yield put(setStoreRemove(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreRemoveSaga() {
  yield takeLatest(getStoreRemove.type, handleStoreRemove);
}
