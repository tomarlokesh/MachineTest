import RestApi, { IMAGE_BASE_URL, BASE_URL } from '../../config/Api';

function* getLoginFromApi(data, token) {
    const Api = new RestApi(token);
    const response = yield Api.loginUser(data);
    return response;
}

function* getLogoutFromApi(token) {
    const Api = new RestApi(token);
    const response = yield Api.logout();
    return response;
}

export const Api = {
    getLoginFromApi,
    getLogoutFromApi,
} 