import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
import { login } from '../../../../services/Authenticate';
import { getLogin, setLogin } from '../../../Reducer/Authenticate/Authenticate';
const userAuthentication = (request) => {
  const response = login(request);
  return response;
};

export function* handleLogin(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setLogin(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(userAuthentication, payload);
      const { data = {} } = response;
      yield put(setLogin(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchLoginSaga() {
  yield takeLatest(getLogin.type, handleLogin);
}
