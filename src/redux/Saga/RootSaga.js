import { all } from 'redux-saga/effects';
import { watchSupportSaveSaga } from './Admin';
import { watchLoginSaga, watchLogoutSaga } from './Authenticate';
import {
  watchCategoryGetSaga,
  watchcategoryListSaga,
  watchCategoryDropdownListSaga,
  watchCategoryRemoveSaga,
  watchCategorySaveSaga,
  watchSubCategoryGetSaga,
  watchSubCategoryListSaga,
  watchSubCategoryRemoveSaga,
  watchSubCategorySaveSaga
} from './Category';
import { watchNewsletterSubscribtionSaveSaga } from './NewsLetter';
import { watchContactListSaga, watchContactSaveSaga } from './Contact';
import {
  watchStoreGetSaga,
  watchStoreListSaga,
  watchStoreMainSaga,
  watchStoreRemoveSaga,
  watchStoreSaveSaga,
  watchStoreSubSaga
} from './Store';
export function* watcherSaga() {
  yield all([
    watchSupportSaveSaga(),
    watchLoginSaga(),
    watchLogoutSaga(),
    watchCategorySaveSaga(),
    watchCategoryGetSaga(),
    watchcategoryListSaga(),
    watchCategoryDropdownListSaga(),
    watchCategoryRemoveSaga(),
    watchNewsletterSubscribtionSaveSaga(),
    watchContactSaveSaga(),
    watchContactListSaga(),
    watchStoreListSaga(),
    watchStoreGetSaga(),
    watchStoreSaveSaga(),
    watchStoreRemoveSaga(),
    watchStoreSubSaga(),
    watchStoreMainSaga(),
    watchSubCategoryListSaga(),
    watchSubCategorySaveSaga(),
    watchSubCategoryRemoveSaga(),
    watchSubCategoryGetSaga()
    // Additional sagas go here
  ]);
}
