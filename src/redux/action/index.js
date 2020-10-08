import * as Action from './actionTypes';

export const getLogin = (data) => { return { type: Action.GET_LOGIN, data } }
export const loginSuccess = (userInfo) => { return { type: Action.LOGIN_SUCCESS, userInfo } }
export const loginFailed = (error) => { return { type: Action.LOGIN_FAILED, error } }

export const getLogout = (data) => { return { type: Action.GET_LOGOUT, data } }
export const logoutSuccess = () => { return { type: Action.LOGOUT_SUCCESS } }
export const logoutFailed = () => { return { type: Action.LOGOUT_FAILED } }

export const getInitialUser = () => {
    return {
        type: Action.GET_USER
    }
}