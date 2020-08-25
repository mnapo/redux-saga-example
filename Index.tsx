import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import {registerRootComponent} from 'expo';

import clients from './reducers/clients';
import getClientsSaga from './sagas/getClientsSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    clients,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getClientsSaga);

const Index = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
export default registerRootComponent(Index);