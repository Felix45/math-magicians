import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const urls = [
    { id: 1, text: 'Home', url: '/math-magician' },
    { id: 2, text: 'Calculator', url: '/calculator' },
    { id: 3, text: 'Quote', url: '/quote' },
  ];
  return (
    <nav className="d-flex space-between navbar">
      <header>
        <h1 className="title">Math Magician</h1>
      </header>
      <ul className="d-flex">
        {
          urls.map((url) => (
            <li
              key={url.id}
            >
              <NavLink to={url.url}>{ url.text }</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
