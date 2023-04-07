import {createStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Reducer from './reducer'
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, Reducer)

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

export default store
export {persistor};