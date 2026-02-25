import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { logout } from '../../../../services/Authenticate';
import {
  getLogout,
  setLogout
} from '../../../Reducer/Authenticate/Authenticate';
const userLogout = (request) => {
  const response = logout(request);
  return response;
};

export function* handleLogout(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setLogout(null));
    } else {
      yield put(setLoading(true));
      const response = yield call(userLogout, payload);
      const { data = {} } = response;
      yield put(setLogout(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchLogoutSaga() {
  yield takeLatest(getLogout.type, handleLogout);
}
