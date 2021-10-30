import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";

import rootReducer from "../reducers/";
import rootSaga from "../sagas";

function reducers() {
    return {
        testing: ''
    };
}

export default () => {
    const sagaMiddleware = reduxSaga();
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)), runSaga: sagaMiddleware.run(rootSaga)
    };
};