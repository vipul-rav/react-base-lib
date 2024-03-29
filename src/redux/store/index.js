import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { apiUrlMiddleware } from '../../middlewares/apiUrlMiddleware';
import { historyMiddleware } from '../../middlewares/historyMiddleware';
import { rootReducer } from '../reducers';
import { history } from '../../routes';

const allMiddleware = [apiUrlMiddleware, historyMiddleware, ...getDefaultMiddleware({ serializableCheck: false })];

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...allMiddleware, routerMiddleware(history)],
  devTools: { name: 'Lib App' }
});
