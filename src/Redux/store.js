import {combineReducers, createStore} from 'redux';
import CategoryReducer from "./CategoryReducer";

const rootReducer = combineReducers(
    {
        categoryReducer:CategoryReducer
    }
)

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    // devToolsEnhancer({ realtime: true,port: 8000 })
);

export default store;
