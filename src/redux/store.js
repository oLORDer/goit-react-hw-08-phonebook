import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice';
import filter from './filter';
import contactsSlice from './contacts-slice';

const reducer = combineReducers({
  auth: authReducer,
  contacts: contactsSlice,
  filter,
});

const store = configureStore({ reducer });

export default store;
