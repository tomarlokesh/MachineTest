import RestClient from 'react-native-rest-client';

export const BASE_URL = '';
export const IMAGE_BASE_URL = '';

export default class RestApi extends RestClient {
  constructor(authToken) {
    super(BASE_URL, {
      headers: {
        // Include as many custom headers as you need
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    });
  }

  loginUser = (data) => {
    return this.POST('login', data);
  }

  logout = () => {
    return this.GET('logout');
  }
}