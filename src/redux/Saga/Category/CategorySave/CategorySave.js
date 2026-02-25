import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { categorySave } from '../../../../services/Category';
import {
  getCategorySave,
  setCategorySave
} from '../../../Reducer/Category/Category';
const categorySaveRequest = (request) => {
  const response = categorySave(request);
  return response;
};

export function* handlecategorySave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setCategorySave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(categorySaveRequest, payload);
      const { data = {} } = response;
      yield put(setCategorySave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    // eslint-disable-next-line no-debugger

    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchCategorySaveSaga() {
  yield takeLatest(getCategorySave.type, handlecategorySave);
}
