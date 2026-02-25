import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import {
  getSubCategoryRemove,
  setSubCategoryRemove
} from '../../../Reducer/Category/Category';
import { subCategoryRemove } from '../../../../services/Category';
const subCategoryRemoveRequest = (request) => {
  const response = subCategoryRemove(request);
  return response;
};

export function* handleSubCategoryRemove(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSubCategoryRemove(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(subCategoryRemoveRequest, payload);
      const { data = {} } = response;
      yield put(setSubCategoryRemove(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSubCategoryRemoveSaga() {
  yield takeLatest(getSubCategoryRemove.type, handleSubCategoryRemove);
}
