import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { categoryDropdownList } from '../../../../services/Category';
import {
  getCategoryDropdownList,
  setCategoryDropdownList
} from '../../../Reducer/Category/Category';

const categoryDropdownListRequest = (request) => {
  const response = categoryDropdownList(request);
  return response;
};

export function* handleCategoryDropdownList(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setCategoryDropdownList(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(categoryDropdownListRequest, payload);
      const { data = {} } = response;
      yield put(setCategoryDropdownList(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchCategoryDropdownListSaga() {
  yield takeLatest(getCategoryDropdownList.type, handleCategoryDropdownList);
}
