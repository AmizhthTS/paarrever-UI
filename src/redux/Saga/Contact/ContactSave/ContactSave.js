import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { contactSave } from '../../../../services/Contact';
import {
  getContactSave,
  setContactSave
} from '../../../Reducer/Contact/Contact';
const contactSaveRequest = (request) => {
  const response = contactSave(request);
  return response;
};

export function* handleContactSave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setContactSave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(contactSaveRequest, payload);
      const { data = {} } = response;
      yield put(setContactSave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    // eslint-disable-next-line no-debugger

    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchContactSaveSaga() {
  yield takeLatest(getContactSave.type, handleContactSave);
}
