import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const token = Cookies.get('accessToken');
  let isAdmin = false;
  if (token) {
    const decoded = jwt_decode(token);
    if (decoded.role === 'admin') {
      isAdmin = true;
    }
  }

  let listMenu = [
    {
      to: '/',
      path: '/',
      name: 'Home',
    },
    {
      to: 'about',
      path: '/about',
      name: 'About',
    },
    {
      to: 'contact',
      path: '/contact',
      name: 'Contact',
    },
  ];

  if (isAdmin) {
    listMenu.push({
      to: 'post',
      path: '/post',
      name: 'Postingan',
    });
  }

  if (token) {
    listMenu.push({
      to: 'logout',
      path: '/logout',
      name: 'Logout',
    });
  } else {
    listMenu.push({
      to: 'login',
      path: '/login',
      name: 'Login',
    });
  }
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Redux Exercise</span>
          </a>

          <ul className="nav nav-pills">
            {listMenu &&
              listMenu.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={`${item.to}`}
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
