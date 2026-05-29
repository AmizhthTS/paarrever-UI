import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../../Reducer/Loader/Loader';
import { setNotification } from '../../Reducer/Notification/Notification';
import { handleError } from '../../../utils/helper';
import {
  reviewSave,
  reviewList,
  reviewGet,
  reviewRemove
} from '../../../services/Review';
import {
  getReviewSave,
  setReviewSave,
  getReviewList,
  setReviewList,
  getReviewGet,
  setReviewGet,
  getReviewRemove,
  setReviewRemove
} from '../../Reducer/Review/Review';

const reviewSaveRequest = (request) => reviewSave(request);
const reviewListRequest = (request) => reviewList(request);
const reviewGetRequest = (id) => reviewGet(id);
const reviewRemoveRequest = (id) => reviewRemove(id);

export function* handleReviewSave(action) {
  const { payload = {} } = action;
  const { clearData = false } = payload;
  try {
    if (clearData) {
      yield put(setReviewSave({}));
    } else {
      yield put(setLoading(true));
      const response = yield call(reviewSaveRequest, payload);
      const { data = {} } = response;
      yield put(setReviewSave(data));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* handleReviewList(action) {
  const { payload = {} } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(reviewListRequest, payload);
    const { data = {} } = response;
    yield put(setReviewList(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* handleReviewGet(action) {
  const { payload = {} } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(reviewGetRequest, payload);
    const { data = {} } = response;
    yield put(setReviewGet(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* handleReviewRemove(action) {
  const { payload = {} } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(reviewRemoveRequest, payload);
    const { data = {} } = response;
    yield put(setReviewRemove(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setNotification({ isActive: true, messageId: 100 }));
    handleError(error);
  }
}

export function* watchReviewSaga() {
  yield takeLatest(getReviewSave.type, handleReviewSave);
  yield takeLatest(getReviewList.type, handleReviewList);
  yield takeLatest(getReviewGet.type, handleReviewGet);
  yield takeLatest(getReviewRemove.type, handleReviewRemove);
}
