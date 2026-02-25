import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils';
import { newsletterSubscribtionSave } from '../../../../services/Newsletter/Newsletter';
import {
  getNewsletterSubscribtionSave,
  setNewsletterSubscribtionSave
} from '../../../Reducer/Newsletter/Newsletter';
const newsletterSubscribtionSaveRequest = (request) => {
  const response = newsletterSubscribtionSave(request);
  return response;
};

export function* handleNewsletterSubscribtionSave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setNewsletterSubscribtionSave(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(newsletterSubscribtionSaveRequest, payload);
      const { data = {} } = response;
      yield put(setNewsletterSubscribtionSave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchNewsletterSubscribtionSaveSaga() {
  yield takeLatest(
    getNewsletterSubscribtionSave.type,
    handleNewsletterSubscribtionSave
  );
}
