import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { subCategoryList } from '../../../../services/Category';
import {
  getSubCategoryList,
  setSubCategoryList
} from '../../../Reducer/Category/Category';
const subCategoryListRequest = (request) => {
  const response = subCategoryList(request);
  return response;
};

export function* handleSubCategoryList(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSubCategoryList(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(subCategoryListRequest, payload);
      const { data = {} } = response;
      yield put(setSubCategoryList(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSubCategoryListSaga() {
  yield takeLatest(getSubCategoryList.type, handleSubCategoryList);
}
