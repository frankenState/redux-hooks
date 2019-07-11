import {all, takeLatest, call, put, take} from 'redux-saga/effects';
import Firestore from './firebase-service/Firestore';

const db = new Firestore();

function* getTodos() {
    const result = yield call(db.getRSF().firestore.getCollection, db.get().collection('todos'));
    const todos = db.sanitizeSnapshot(result, ['name','complete']);
    yield put({ type: 'SET_TO_DOS', todos});    
}

function* addTodo({todo}) {
    try {
        yield call(db.getRSF().firestore.addDocument, 'todos', todo);
        yield put({type: 'GET_TO_DOS'});
    } catch(e) {
        console.log(e);
    }
}

function* toggleTodo({id,todo}){
    try {
        yield call(db.getRSF().firestore.updateDocument, 'todos/' + id, todo);
        yield put({type:'GET_TO_DOS'});
    } catch (e) {
        console.log(e);
    }
}

function* deleteTodo({id}){
    try {
        yield call(db.getRSF().firestore.deleteDocument, 'todos/' + id);
        yield put({type:'GET_TO_DOS'});
    } catch (e) {
        console.log(e);
    }
}

function* todosSaga(){
    yield all([
        takeLatest('GET_TO_DOS', getTodos),
        takeLatest('TOGGLE_TO_DO', toggleTodo),
        takeLatest('ADD_TO_DO', addTodo),
        takeLatest('DELETE_TO_DO', deleteTodo),
    ])
}


export default todosSaga;