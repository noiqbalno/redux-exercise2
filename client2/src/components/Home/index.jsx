import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivePosts } from '../../actions/postsAction';

const Home = () => {
  const { getActivePostsResult, getActivePostsLoading, getActivePostsError } =
    useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log('useeffeect home');
    dispatch(getActivePosts());
  }, [dispatch]);

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">SELAMAT DATANG DI HASIL LATIHAN REDUX</h1>
            <p className="lead text-body-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              corporis debitis assumenda incidunt corrupti natus magnam vitae
              porro laboriosam qui quisquam iste ab nobis, quam doloribus.
            </p>
            <p>
              <Link to={'/login'} className="btn btn-primary btn-lg my-2">
                LOGIN
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {getActivePostsResult ? (
              getActivePostsResult.data.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img
                      src={item.image}
                      alt="blogsimg"
                      className="bd-placeholder-img card-img-top"
                    />
                    <div className="card-body">
                      <Link to={`/post/detail/${item.id}`}>
                        <h3 className="fs-5">{item.judul}</h3>
                      </Link>
                      <p className="card-text" style={{ lineClamp: 5 }}>
                        {item.deskripsi.substring(0, 120)}...
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`/post/detail/${item.id}`}>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Selengkapnya
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : getActivePostsLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getActivePostsError ? getActivePostsError : 'Data Kosong'}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
