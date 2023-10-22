import axios from 'axios';
import Swal from 'sweetalert2';
export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = (data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: 'POST',
      url: `http://localhost:3500/contacts`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get
        Swal.fire('Pesan Terkirim!');
        console.log('3. berhasil create data: ', response.data);
        dispatch({
          type: ADD_CONTACT,
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
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
