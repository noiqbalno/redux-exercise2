import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_DETAIL_USER,
} from '../../actions/userAction';

const initialState = {
  loginUserResult: false,
  loginUserLoading: false,
  loginUserError: false,
  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log('4. Masuk reduces');
      return {
        ...state,
        loginUserResult: action.payload.data,
        loginUserLoading: action.payload.loading,
        loginUserError: action.payload.errorMessage,
      };

    case LOGOUT_USER:
      console.log('4. Masuk reduces');
      return {
        ...state,
        loginUserResult: false,
      };

    case GET_DETAIL_USER:
      console.log('4. Masuk reduces');
      return {
        ...state,
        getDetailUserResult: action.payload.data,
        getDetailUserLoading: action.payload.loading,
        getDetailUserError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default userReducer;
