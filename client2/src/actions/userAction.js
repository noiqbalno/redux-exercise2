import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_DETAIL_USER = 'GET_DETAIL_USER';

export const loginUser = (data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'POST',
      url: `http://localhost:3500/users/login`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get
        Swal.fire('Login Berhasil!');
        console.log('3. berhasil login: ', response.data);

        Cookies.set('accessToken', response.data.accessToken);

        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log('3. gagal: ', error);

        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};

export const logoutUser = (data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: LOGOUT_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const getDetailUser = (id) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'GET',
      url: `http://localhost:3500/users/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log('3. berhasil get data: ', response.data);
        dispatch({
          type: GET_DETAIL_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log('3. gagal get data: ', error.message);

        dispatch({
          type: GET_DETAIL_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
