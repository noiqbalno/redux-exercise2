import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  activatePost,
  deactivatePost,
  deletePost,
  getListPosts,
  resetInitialStatePost,
} from '../../actions/postsAction';

const Posts = () => {
  const navigate = useNavigate();
  const {
    getListPostsResult,
    getListPostsLoading,
    getListPostsError,
    deletePostsResult,
    activatePostsResult,
    deactivatePostsResult,
    deletePostsError,
    activatePostsError,
    deactivatePostsError,
  } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log('useeffeect post');
    dispatch(getListPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log('useeffeect delete');
    if (deletePostsResult || activatePostsResult || deactivatePostsResult) {
      dispatch(getListPosts());
    }

    if (deletePostsError) {
      if (deletePostsError.response.status === 401) {
        navigate('/logout');
        dispatch(resetInitialStatePost());
      }
    }

    if (activatePostsError) {
      if (activatePostsError.response.status === 401) {
        navigate('/logout');
        dispatch(resetInitialStatePost());
      }
    }

    if (deactivatePostsError) {
      if (deactivatePostsError.response.status === 401) {
        navigate('/logout');
        dispatch(resetInitialStatePost());
      }
    }
  }, [
    deletePostsResult,
    dispatch,
    activatePostsResult,
    deactivatePostsResult,
    deletePostsError,
    activatePostsError,
    deactivatePostsError,
    navigate,
  ]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <div className="container py-4">
        <div className="mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid">
            <h1 className="display-7 fw-bold col-md-12">Postingan</h1>
            <Link to={'/post/create'}>
              <button className="btn btn-primary my-4" type="button">
                Tambah Data
              </button>
            </Link>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">judul</th>
                  <th scope="col">deskripsi</th>
                  <th scope="col">status</th>
                  <th scope="col">aksi</th>
                </tr>
              </thead>
              <tbody>
                {getListPostsResult ? (
                  getListPostsResult.data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.judul}</td>
                      <td>{item.deskripsi.substring(0, 100)}</td>
                      <td className="col-md-2">
                        {item.active ? (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => dispatch(deactivatePost(item.id))}
                          >
                            Tampil
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(activatePost(item.id))}
                          >
                            Tidak Tampil
                          </button>
                        )}
                      </td>
                      <td className="col-md-2">
                        <Link to={`/post/update/${item.id}`}>
                          <button className="btn btn-primary mx-3">Ubah</button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : getListPostsLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  <tr>
                    <td>
                      {getListPostsError ? getListPostsError : 'Data Kosong'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
