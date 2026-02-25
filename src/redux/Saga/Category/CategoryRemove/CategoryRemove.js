import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { categoryRemove } from '../../../../services/Category';
import {
  getCategoryRemove,
  setCategoryRemove
} from '../../../Reducer/Category/Category';
const categoryRemoveRequest = (request) => {
  const response = categoryRemove(request);
  return response;
};

export function* handleCategoryRemove(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setCategoryRemove(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(categoryRemoveRequest, payload);
      const { data = {} } = response;
      yield put(setCategoryRemove(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchCategoryRemoveSaga() {
  yield takeLatest(getCategoryRemove.type, handleCategoryRemove);
}
