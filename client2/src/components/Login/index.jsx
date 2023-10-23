import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetInitialStateUser } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { loginUserResult, loginUserLoading, loginUserError } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginUserError) {
      setError(loginUserError.response.data.message);
    }
  }, [dispatch, navigate, loginUserError]);

  useEffect(() => {
    if (loginUserResult) {
      dispatch(resetInitialStateUser());
      navigate('/');
    }
  }, [loginUserResult, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        username: username,
        password: password,
      })
    );
  };

  return (
    <>
      <div className="form-signin m-auto min-vh-100 d-flex justify-content-center align-items-center">
        <form className="col-md-3" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
          {error && (
            <div className={`alert alert-danger`} role="alert">
              {error}
            </div>
          )}

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {loginUserLoading ? (
            <button
              className="btn btn-primary w-100 py-2"
              type="button"
              disabled
            >
              Loading ...
            </button>
          ) : (
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          )}
          <p className="mt-5 mb-3 text-body-secondary text-center">© 2023</p>
        </form>
      </div>
    </>
  );
};

export default Login;
