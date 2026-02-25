import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { categoryGet } from '../../../../services/Category';
import {
  getCategoryGet,
  setCategoryGet
} from '../../../Reducer/Category/Category';
const categoryGetRequest = (request) => {
  const response = categoryGet(request);
  return response;
};

export function* handleCategoryGet(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setCategoryGet(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(categoryGetRequest, payload);
      const { data = {} } = response;
      yield put(setCategoryGet(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchCategoryGetSaga() {
  yield takeLatest(getCategoryGet.type, handleCategoryGet);
}
