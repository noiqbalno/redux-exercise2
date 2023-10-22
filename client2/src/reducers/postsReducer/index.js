import {
  GET_LIST_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_DETAIL_POST,
  UPDATE_POST,
  ACTIVATE_POST,
  DEACTIVATE_POST,
  GET_ACTIVE_POSTS,
} from '../../actions/postsAction';

const initialState = {
  getListPostsResult: false,
  getListPostsLoading: false,
  getListPostsError: false,
  addPostsResult: false,
  addPostsLoading: false,
  addPostsError: false,
  deletePostsResult: false,
  deletePostsLoading: false,
  deletePostsError: false,
  detailPostsResult: false,
  detailPostsLoading: false,
  detailPostsError: false,
  updatePostsResult: false,
  updatePostsLoading: false,
  updatePostsError: false,
  activatePostsResult: false,
  activatePostsLoading: false,
  activatePostsError: false,
  deactivatePostsResult: false,
  deactivatePostsLoading: false,
  deactivatePostsError: false,
  getActivePostsResult: false,
  getActivePostsLoading: false,
  getActivePostsError: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POSTS:
      console.log('4. Masuk reduces');
      return {
        ...state,
        getListPostsResult: action.payload.data,
        getListPostsLoading: action.payload.loading,
        getListPostsError: action.payload.errorMessage,
      };
    case GET_ACTIVE_POSTS:
      console.log('4. Masuk reduces');
      return {
        ...state,
        getActivePostsResult: action.payload.data,
        getActivePostsLoading: action.payload.loading,
        getActivePostsError: action.payload.errorMessage,
      };

    case ADD_POST:
      console.log('4. Masuk reduces');
      return {
        ...state,
        addPostsResult: action.payload.data,
        addPostsLoading: action.payload.loading,
        addPostsError: action.payload.errorMessage,
      };

    case DELETE_POST:
      console.log('4. Masuk reduces');
      return {
        ...state,
        deletePostsResult: action.payload.data,
        deletePostsLoading: action.payload.loading,
        deletePostsError: action.payload.errorMessage,
      };

    case GET_DETAIL_POST:
      console.log('4. Masuk reducer detail');
      return {
        ...state,
        detailPostsResult: action.payload.data,
        detailPostsLoading: action.payload.loading,
        detailPostsError: action.payload.errorMessage,
      };

    case UPDATE_POST:
      console.log('4. Masuk reducer update');
      return {
        ...state,
        updatePostsResult: action.payload.data,
        updatePostsLoading: action.payload.loading,
        updatePostsError: action.payload.errorMessage,
      };

    case ACTIVATE_POST:
      console.log('4. Masuk reducer');
      return {
        ...state,
        activatePostsResult: action.payload.data,
        activatePostsLoading: action.payload.loading,
        activatePostsError: action.payload.errorMessage,
      };

    case DEACTIVATE_POST:
      console.log('4. Masuk reducer');
      return {
        ...state,
        deactivatePostsResult: action.payload.data,
        deactivatePostsLoading: action.payload.loading,
        deactivatePostsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default postsReducer;
