import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contactReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// const persistor = persistStore(store);

// const contactsPersistConfig = {
// 	key: 'contacts',
// 	storage,
// 	blacklist: [ 'filter' ],
// };  // конфигурация для персист
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
// export default { store, persistor };
