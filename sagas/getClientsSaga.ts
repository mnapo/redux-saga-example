import {call, put, takeLatest} from 'redux-saga/effects';
import getClients from '../api/getClients';

function* fetchClients(){
    yield put({type: "GET_CLIENTS_PENDING"});
    try{
        let clients = yield call(getClients);
        yield put({type: "GET_CLIENTS_SUCCESSFUL", clients});
    } catch(error){
        console.log(error);
        yield put({type: "GET_CLIENTS_FAILED", error});
    }
};

export default function* getClientsSaga(){
    yield takeLatest("GET_CLIENTS_REQUESTED", fetchClients);
};