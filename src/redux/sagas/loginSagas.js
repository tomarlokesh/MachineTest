import * as Action from '../action/actionTypes';
import NetInfo from '@react-native-community/netinfo';
//Saga effects
import { put, takeLatest, call } from 'redux-saga/effects';
import { Api } from './Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../../constants/Constant';

function* getLogin(data) {
    try {

        const connectionInfo = yield NetInfo.fetch();

        if(connectionInfo.type==='none' || connectionInfo.type==='unknown'){
            alert('No Internet Connection');
            yield call(data.data.onDone,{});
            return;
        }

        const userInfo = yield Api.getLoginFromApi(data.data,data);   
        if (userInfo.token) {
            const userDetail = userInfo.response;
            userDetail['token'] = userInfo.token;
            yield put({ type: Action.LOGIN_SUCCESS, userInfo: userDetail });
            yield call(data.data.onDone, userInfo);
        } else {
            yield call(data.data.onDone, userInfo);
            yield put({ type: Action.LOGIN_FAILED, error: userInfo });
        }
    } catch (error) {        
        console.log(error);
        yield call(data.data.onDone, error);
        yield put({ type: Action.LOGIN_FAILED, error });
    }
}

function* getLogout(data) {
    try {

        const connectionInfo = yield NetInfo.fetch();

        if(connectionInfo.type==='none' || connectionInfo.type==='unknown'){
            alert('No Internet Connection');
            yield call(data.data.onDone,{});
            return;
        }

        const userInfo = yield Api.getLogoutFromApi(data.data.token);   

        // yield put({ type: Action.LOGOUT_SUCCESS }); 
        yield call(data.data.onDone,userInfo);    
        
    } catch (error) {        
        console.log(error);
        yield call(data.data.onDone,error);   
        yield put({ type: Action.LOGOUT_FAILED });
    }
}

function* getUserFromAsync() {
    try {
        const userInfo = yield AsyncStorage.getItem(Constant.USER_INFO);  
        if(userInfo!=null){
            yield put({ type: Action.SET_INIT, userInfo: JSON.parse(userInfo) }); 
        }
    } catch (error) {        
        console.log(error);
        // yield put({ type: Action.LOGIN_FAILED, error });
    }
}

export function* watchGetLogin() {
    yield takeLatest(Action.GET_LOGIN, getLogin);
    yield takeLatest(Action.GET_USER, getUserFromAsync);
    yield takeLatest(Action.GET_LOGOUT, getLogout);
}