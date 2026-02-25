import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { storeList } from '../../../../services/Store';
import { getStoreList, setStoreList } from '../../../Reducer/Store/Store';
const storeListRequest = (request) => {
  const response = storeList(request);
  return response;
};

export function* handleStoreList(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setStoreList(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(storeListRequest, payload);
      const { data = {} } = response;
      yield put(setStoreList(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchStoreListSaga() {
  yield takeLatest(getStoreList.type, handleStoreList);
}
