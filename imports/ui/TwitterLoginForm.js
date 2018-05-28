import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

class TwitterLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  handleTwitterLogin = e => {
    e.preventDefault();
    Meteor.loginWithTwitter(
      { },
      err => {
        if (err) {
          this.setState({
            error: err.reason
          });
        } else {
          alert('worked');
        }
      }
    );
  };


  render() {
    return(
        <form className="form-signin" id="login-form" onSubmit={this.handleTwitterLogin}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmailTwitter" className="sr-only">Email address</label>
          <input type="email" id="inputEmailTwitter" className="form-control" placeholder="Email address" required="" autoFocus="" />
          <label htmlFor="inputPasswordTwitter" className="sr-only">Password</label>
          <input type="password" id="inputPasswordTwitter" className="form-control" placeholder="Password" required="" />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
  }
}

export default TwitterLoginForm;