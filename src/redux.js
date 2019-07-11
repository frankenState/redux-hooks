import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todosSaga from './services';

import uuid from 'uuid/v4';

const initialState = {
    todos: [
        {
            id: uuid(),
            name: 'Go to the gym.',
            complete: false
        },{
            id: uuid(),
            name: 'Do laundry',
            complete: true
        },
    ]
}

function reducer(state = initialState, {type,payload,todos}) {
    switch(type){
        case 'SET_TO_DOS':
            return {
                ...state,
                todos: [...todos],
            }
        default: return state;        
    }
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            sagaMiddleware
        ),window.__REDUX_DEVTOOLS_EXTENSION__() && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(todosSaga);

export default store;