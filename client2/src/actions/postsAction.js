import axios from 'axios';
import Swal from 'sweetalert2';

export const GET_LIST_POSTS = 'GET_LIST_POSTS';
export const GET_ACTIVE_POSTS = 'GET_ACTIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_DETAIL_POST = 'DETAIL_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ACTIVATE_POST = 'ACTIVATE_POST';
export const DEACTIVATE_POST = 'DEACTIVATE_POST';

export const getListPosts = () => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_LIST_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'GET',
      url: `http://localhost:3500/posts`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log('3. berhasil get data: ', response.data);
        dispatch({
          type: GET_LIST_POSTS,
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
          type: GET_LIST_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getActivePosts = () => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_ACTIVE_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'GET',
      url: `http://localhost:3500/posts?status=true`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log('3. berhasil get data: ', response.data);
        dispatch({
          type: GET_ACTIVE_POSTS,
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
          type: GET_ACTIVE_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addPost = (data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'POST',
      url: `http://localhost:3500/posts`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire('Berhasil menambah data');
        console.log('3. berhasil create data: ', response.data);
        dispatch({
          type: ADD_POST,
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
          type: ADD_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePost = (id) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: DELETE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'DELETE',
      url: `http://localhost:3500/posts/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log('3. berhasil create data: ', response.data);
        dispatch({
          type: DELETE_POST,
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
          type: DELETE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailPost = (id) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'GET',
      url: `http://localhost:3500/posts/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log('3. berhasil get data: ', response.data);
        dispatch({
          type: GET_DETAIL_POST,
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
          type: GET_DETAIL_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updatePost = (id, data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: UPDATE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'PUT',
      url: `http://localhost:3500/posts/${id}`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire('Berhasil mengubah data');
        console.log('3. berhasil mengubah data: ', response.data);
        dispatch({
          type: UPDATE_POST,
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
          type: UPDATE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const activatePost = (id) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: ACTIVATE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'PUT',
      url: `http://localhost:3500/posts/activate/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        Swal.fire('Berhasil mengaktifkan data');
        console.log('3. berhasil activate data: ', response.data);
        dispatch({
          type: ACTIVATE_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log('3. gagal: ', error.message);

        dispatch({
          type: ACTIVATE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deactivatePost = (id) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: DEACTIVATE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'PUT',
      url: `http://localhost:3500/posts/deactivate/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        Swal.fire('Berhasil menonaktifkan data');
        console.log('3. berhasil deactivate data: ', response.data);
        dispatch({
          type: DEACTIVATE_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log('3. gagal: ', error.message);

        dispatch({
          type: DEACTIVATE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
