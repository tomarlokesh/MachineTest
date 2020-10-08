import * as Action from '../action/actionTypes';

const loginReducer = (userInfo, action) => {
    switch (action.type) {
        case Action.LOGIN_SUCCESS:
            return action.userInfo;
            
        case Action.LOGIN_FAILED:
            return null;

        case Action.SET_INIT:
            return action.userInfo;

        case Action.LOGOUT_SUCCESS:
            return null;

        case Action.LOGOUT_FAILED:
            return userInfo;

        default:
            return userInfo ? userInfo : null;
    }
}

export default loginReducer;