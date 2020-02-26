import { createStore, compose } from 'redux'; 
import rootReducer from '../reducers/user';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'starter',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: null,
    whitelist: null
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);