import { combineReducers } from '@reduxjs/toolkit';
import Loader from './Loader/Loader';
import Notification from './Notification/Notification';
import Admin from './Admin/Admin';
import Language from './Language/Language';
import Authenticate from './Authenticate/Authenticate';
import Category from './Category/Category';
import Newsletter from './Newsletter/Newsletter';
import Contact from './Contact/Contact';
import Store from './Store/Store';
const rootReducer = combineReducers({
  loader: Loader,
  notification: Notification,
  language: Language,
  admin: Admin,
  authenticate: Authenticate,
  category: Category,
  newsletter: Newsletter,
  contact: Contact,
  store: Store
});
export default rootReducer;
