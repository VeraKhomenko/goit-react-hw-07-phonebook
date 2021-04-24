
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contactReducer'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
		},
	}),
	logger,
];

const contactsPersistConfig = {
	key: 'contacts',
	storage,
	blacklist: [ 'filter' ],
};

const store = configureStore({
	reducer: {
		contacts: persistReducer(contactsPersistConfig, contactReducer),
	},
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

// const rootReducer = combineReducers({
// 	contacts: contactReducer,
// })

// const contactReducer = (state = initialContacts, { type, payload }) => {
// 	switch (type) {
// 		case types.ADD:
// 			return {
// 				...state,

// 				value: state.value + payload,
// 			};

// 		case types.DELETE:
// 			return {
// 				...state,

// 				value: state.value + payload,
// 			};
// 		// case types.CHANGE:
// 		// 		return { contacts: [ ...state.contacts, [] ] }
// 		default:
// 			return state;

// 	}

// };