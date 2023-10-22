import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import CreatePost from './components/Posts/CreatePost';
import UpdatePost from './components/Posts/UpdatePost';
import Contact from './components/Contact';
import DetailPost from './components/Posts/DetailPost';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Logout from './components/Login/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoutes roles={['member', 'admin']}>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoutes roles={['member', 'admin']}>
                <About />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/post"
            element={
              <ProtectedRoutes roles={['admin']}>
                <Posts />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/post/create"
            element={
              <ProtectedRoutes roles={['admin']}>
                <CreatePost />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/post/update/:id"
            element={
              <ProtectedRoutes roles={['admin']}>
                <UpdatePost />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/post/detail/:id"
            element={
              <ProtectedRoutes roles={['admin']}>
                <DetailPost />
              </ProtectedRoutes>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
