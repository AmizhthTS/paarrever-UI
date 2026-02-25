import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { storeMainArea } from '../../../../services/Store/Store';
import { getStoreMain, setStoreMain } from '../../../Reducer/Store/Store';
const storeMainAreaRequest = (request) => {
  const response = storeMainArea(request);
  return response;
};

export function* handleStoreMain(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreMain(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeMainAreaRequest, payload);
      const { data = {} } = response;
      yield put(setStoreMain(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreMainSaga() {
  yield takeLatest(getStoreMain.type, handleStoreMain);
}
