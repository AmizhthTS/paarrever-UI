import { call, put, takeLatest } from 'redux-saga/effects';
import { subscriptionPlan } from '../../../../services/Admin';
import {
  setSubscriptionPlan,
  getSubscriptionPlan
} from '../../../Reducer/Admin/Admin';
import { setLoading } from '../../../Reducer/Loader/Loader';
import { setNotification } from '../../../Reducer/Notification/Notification';
import { handleError } from '../../../../utils/helper';
const generateSubscriptionPlanRequest = (request) => {
  const response = subscriptionPlan(request);
  return response;
};

export function* handleSubscriptionPlan(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setSubscriptionPlan(''));
    } else {
      yield put(setLoading(true));
      const response = yield call(generateSubscriptionPlanRequest, payload);
      const { data = {} } = response;
      yield put(setSubscriptionPlan(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchSubscriptionPlanSaga() {
  yield takeLatest(getSubscriptionPlan.type, handleSubscriptionPlan);
}
