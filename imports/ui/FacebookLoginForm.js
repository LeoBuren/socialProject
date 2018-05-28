import React from 'react';

class FacebookLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  handleFacebookLogin = e => {
    e.preventDefault();
    Meteor.loginWithFacebook(
      { requestPermissions: ['public_profile'] },
      err => {
        if (err) {
          this.setState({
            error: err.reason
          });
        } else {
          // TODO: SUCCESS
        }
      }
    );
  };


  render() {
    return (
      <div>
          <form className="form-signin" onSubmit={this.handleFacebookLogin}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmailFacebook" className="sr-only">Email address</label>
            <input type="email" id="inputEmailFacebook" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputPasswordFacebook" className="sr-only">Password</label>
            <input type="password" id="inputPasswordFacebook" className="form-control" placeholder="Password" required="" />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
    );
  }
}

export default FacebookLoginForm;