import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { categoryList } from '../../../../services/Category';
import {
  getCategoryList,
  setCategoryList
} from '../../../Reducer/Category/Category';
const categoryListRequest = (request) => {
  const response = categoryList(request);
  return response;
};

export function* handlecategoryList(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setCategoryList(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(categoryListRequest, payload);
      const { data = {} } = response;
      yield put(setCategoryList(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchcategoryListSaga() {
  yield takeLatest(getCategoryList.type, handlecategoryList);
}
