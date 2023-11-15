import {configureStore,combineReducers} from "@reduxjs/toolkit";
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
import SidebarReduce from '@/slice/sidebar'
import LanguageReduce from '@/slice/language'
import CarModelReduce from '@/slice/testDrive'
import CarSale from '@/slice/sale'


const rootReducer =combineReducers({
    sidebar:SidebarReduce,
    lang:LanguageReduce,
    drive:CarModelReduce,
    sale: CarSale, 
})


const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer=persistReducer(persistConfig,rootReducer)

 const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
     devTools: process.env.NODE_ENV !== 'production',
})

export const persistor=persistStore(store)
export default store