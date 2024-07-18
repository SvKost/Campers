import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './slice';
// import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    // filters: filtersReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
