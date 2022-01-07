import { createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import courseTabListReducer from './reducers/courseTabList';
import courseTabListState from "./states/courseTabList";

const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})

// reducers 整合全部的 reducers
const store = createStore(allReducers, {
    courseTabList: courseTabListState
}, applyMiddleware(ReduxThunk));

export default store;