import { call, all, fork } from 'redux-saga/effects';
import { watchGetLogin } from './loginSagas';

export default function* rootSaga() {
    yield all([
        fork(watchGetLogin),
    ])           
}