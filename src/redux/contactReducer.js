import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import types from './types'
import actions from './actions';

const initialContacts = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialContacts, {
	[ actions.addContact ]: (state, { payload }) =>
		state.find(({ name }) => name === payload.name)
			? alert(`${payload.name} is already in contacts`)
			: [ payload, ...state ],

	[ actions.deleteContact ]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
	[ actions.changeContact ]: (_, { payload }) => payload,
});


export default combineReducers({
	items,
	filter,
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