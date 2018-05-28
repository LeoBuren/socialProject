import React from 'react';
import TwitterLoginForm from './TwitterLoginForm';
import FacebookLoginForm from './FacebookLoginForm';
import SocialLoginButton from './SocialLoginButton';

class AppContainer extends React.Component {
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
                //SUCCESS
            }
          }
        );
    };

    render() {
        return(
            <div className="overflow-wrapper">
                <div className="containerTest twitter">
                    <div className="socialContainer twitter">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Sign in using Twitter</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <SocialLoginButton func={this.handleTwitterLogin} />
                    <img className="social-icon" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
                    </div>
                </div>
                <div className="containerTest facebook">
                    <div className="socialContainer facebook">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Sign in using Facebook</h2>
                            <p className="lead">And an even wittier subheading.</p>
                        </div>
                        <SocialLoginButton func={this.handleFacebookLogin} />
                        <img className="social-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;