import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from '../features/todoSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

  const persistConfig = {
    key : 'root',
    // version : 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, todoSlice)

export const store = configureStore({
  reducer :{
    todos: persistedReducer,
  },
  middleware : [thunk],

})

export const persistor = persistStore(store)