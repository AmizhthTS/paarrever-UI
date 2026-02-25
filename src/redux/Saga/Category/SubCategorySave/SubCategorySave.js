import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import {
  getSubCategorySave,
  setSubCategorySave
} from '../../../Reducer/Category/Category';
import { subCategorySave } from '../../../../services/Category';
const subCategorySaveRequest = (request) => {
  const response = subCategorySave(request);
  return response;
};

export function* handleSubCategorySave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSubCategorySave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(subCategorySaveRequest, payload);
      const { data = {} } = response;
      yield put(setSubCategorySave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    // eslint-disable-next-line no-debugger

    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSubCategorySaveSaga() {
  yield takeLatest(getSubCategorySave.type, handleSubCategorySave);
}
