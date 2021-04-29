import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContact,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

const initialContacts = [];

const items = createReducer(initialContacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const filter = createReducer('', {
  [changeContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// const contacts = (state = [], { type, payload }) => {
// 	switch (type) {
// 		case types.ADD:
// 			return [ ...state, { payload } ]
// 		case types.DELETE:
// 			return state.filter(({ id }) => id !== payload)

// 		default:
// 			return state;
// 	}
// const filter = (state = '', { type, payload }) => {
// 	switch (type) {
// 		case actions.changeContact:
// 			return payload;
// 		default:
// 			return state
// 	}
// };
// };
