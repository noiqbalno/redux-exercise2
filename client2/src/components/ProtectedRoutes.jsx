import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Error from './Error';

export default function ProtectedRoutes({ roles, children }) {
  const token = Cookies.get('accessToken');
  let decoded = '';
  if (token) {
    decoded = jwt_decode(token);
  }
  if (!roles.includes(decoded.role)) {
    return <Error code={401} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
