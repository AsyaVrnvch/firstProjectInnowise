import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootSaga from './saga/rootSaga'

const initialState = {

}

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const middleWare =
    process.env.NODE_ENV !== 'production'
        ? [logger, routerMiddleware(history), sagaMiddleware]
        : [routerMiddleware(history), sagaMiddleware]


const composeEnchancers = compose;


const store = createStore(
    rootReducer,
    initialState,
    composeEnchancers(applyMiddleware(...middleWare))
)

sagaMiddleware.run(rootSaga)

export default store