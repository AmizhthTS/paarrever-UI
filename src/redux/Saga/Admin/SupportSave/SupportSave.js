import { call, put, takeLatest } from 'redux-saga/effects';

import { setSupportSave, getSupportSave } from '../../../Reducer/Admin/Admin';
import { supportSave } from '../../../../services/Admin/Admin';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
const supportSaveRequest = (request) => {
  const response = supportSave(request);
  return response;
};

export function* handleSupportSave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSupportSave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(supportSaveRequest, payload);
      const { data = {} } = response;
      yield put(setSupportSave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSupportSaveSaga() {
  yield takeLatest(getSupportSave.type, handleSupportSave);
}
