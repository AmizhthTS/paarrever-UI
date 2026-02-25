import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { contactList } from '../../../../services/Contact';
import {
  getContactList,
  setContactList
} from '../../../Reducer/Contact/Contact';
const contactListRequest = (request) => {
  const response = contactList(request);
  return response;
};

export function* handleContactList(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setContactList(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(contactListRequest, payload);
      const { data = {} } = response;
      yield put(setContactList(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchContactListSaga() {
  yield takeLatest(getContactList.type, handleContactList);
}
