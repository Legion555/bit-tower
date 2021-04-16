import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import userDataReducer from '../slices/userDataSlice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    userData: userDataReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [userDataReducer]
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;