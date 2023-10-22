import { ADD_CONTACT } from '../../actions/contactAction';

const initialState = {
  addContactResult: false,
  addContactLoading: false,
  addContactError: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      console.log('4. Masuk reduces');
      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default contactReducer;
