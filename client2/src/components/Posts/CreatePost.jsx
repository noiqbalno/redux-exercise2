import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost, resetInitialStatePost } from '../../actions/postsAction';

const CreatePost = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState('');
  const [image, setImage] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const userId = 19;

  const { addPostsResult, addPostsError } = useSelector(
    (state) => state.postsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (addPostsResult) {
      // window.location = '/post';
      navigate('/post');
    }

    if (addPostsError) {
      if (addPostsError.response.status === 401) {
        navigate('/logout');
        dispatch(resetInitialStatePost());
      }
    }
  }, [addPostsResult, dispatch, navigate, addPostsError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addPost({
        judul: judul,
        image: image,
        deskripsi: deskripsi,
        user_id: userId,
      })
    );
  };

  return (
    <>
      <div className="container py-4">
        <div className="mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid">
            <h1 className="display-7 fw-bold col-md-12">Tambah Postingan</h1>
            <div className="py-5 col-md-6">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <label className="form-label">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    name="judul"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    className="form-control"
                    cols="30"
                    rows="10"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Link Gambar</label>
                  <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
