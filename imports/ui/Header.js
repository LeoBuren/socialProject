import React from 'react';
// prop-types needs to be installed in updated react
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

// stateless functional component
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => Accounts.logout()}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;