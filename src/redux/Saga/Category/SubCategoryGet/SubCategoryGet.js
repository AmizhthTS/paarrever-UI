import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import {
  getSubCategoryGet,
  setSubCategoryGet
} from '../../../Reducer/Category/Category';
import { subCategoryGet } from '../../../../services/Category';
const subCategoryGetRequest = (request) => {
  const response = subCategoryGet(request);
  return response;
};

export function* handleSubCategoryGet(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSubCategoryGet(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(subCategoryGetRequest, payload);
      const { data = {} } = response;
      yield put(setSubCategoryGet(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSubCategoryGetSaga() {
  yield takeLatest(getSubCategoryGet.type, handleSubCategoryGet);
}
