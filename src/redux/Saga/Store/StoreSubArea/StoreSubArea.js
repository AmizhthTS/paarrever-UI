import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { storeSubArea } from '../../../../services/Store/Store';
import { getStoreSub, setStoreSub } from '../../../Reducer/Store/Store';
const storeSubAreaRequest = (request) => {
  const response = storeSubArea(request);
  return response;
};

export function* handleStoreSub(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreSub(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeSubAreaRequest, payload);
      const { data = {} } = response;
      yield put(setStoreSub(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreSubSaga() {
  yield takeLatest(getStoreSub.type, handleStoreSub);
}
