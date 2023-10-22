import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getDetailPost, updatePost } from '../../actions/postsAction';
const UpdatePost = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [judul, setJudul] = useState('');
  const [image, setImage] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const userId = 19;

  const {
    detailPostsResult,
    detailPostsLoading,
    detailPostsError,
    updatePostsResult,
  } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log('useeffeect post');
    dispatch(getDetailPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    //get list posts
    if (detailPostsResult) {
      setJudul(detailPostsResult.data.judul);
      setImage(detailPostsResult.data.image);
      setDeskripsi(detailPostsResult.data.deskripsi);
    }
  }, [dispatch, id, detailPostsResult]);

  useEffect(() => {
    if (updatePostsResult) {
      // window.location = '/post';
      navigate('/post');
    }
  }, [updatePostsResult, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePost(id, {
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
            <h1 className="display-7 fw-bold col-md-12">Ubah Postingan</h1>
            <div className="py-5 col-md-6">
              {detailPostsResult ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <label className="form-label">Judul</label>
                    <input
                      type="text"
                      className="form-control"
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
              ) : detailPostsLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{detailPostsError ? detailPostsError : 'Data Kosong'}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
