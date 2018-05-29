import React from 'react';
import SocialLoginButton from './SocialLoginButton';
import { Meteor } from 'meteor/meteor';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    checkForLoginTwitter = () => Meteor.user().services ? Meteor.user().services.twitter ? 
        (<p>Logged in</p>) : (
            <div className="socialContainer twitter">
                <img className="social-icon" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
                <div className="my-3 py-3">
                    <h2 className="display-5">Sign in using Twitter</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>
                <SocialLoginButton func={this.handleTwitterLogin} />
            </div>
        ): this.notLoggedInContent();

        /*
    checkForLoginFacebook = () => Meteor.user().services.twitter ? 
    (<p>Logged in</p>) : (
        <div className="socialContainer facebook">
            <img className="social-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
            <div className="my-3 py-3">
                <h2 className="display-5">Sign in using Facebook</h2>
                <p className="lead">And an even wittier subheading.</p>
            </div>
            <SocialLoginButton func={this.handleFacebookLogin} />
        </div>
    );*/

    checkForLoginFacebook = () => Meteor.user().services ? Meteor.user().services.facebook ? 
    (<p>Logged in</p>) : (
        <div className="socialContainer facebook">
            <img className="social-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
            <div className="my-3 py-3">
                <h2 className="display-5">Sign in using Facebook</h2>
                <p className="lead">And an even wittier subheading.</p>
            </div>
            <SocialLoginButton func={this.handleFacebookLogin} />
        </div>
    )
    : this.notLoggedInContent();

    notLoggedInContent = () =>
        (<div className="overflow-wrapper">
            <div className="containerTest twitter">
                <div className="socialContainer twitter">
                    <img className="social-icon" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
                    <div className="my-3 py-3">
                        <h2 className="display-5">Sign in using Twitter</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <SocialLoginButton func={this.handleTwitterLogin} />
                </div>
            </div>
            <div className="containerTest facebook">
                    <div className="socialContainer facebook">
                    <img className="social-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
                    <div className="my-3 py-3">
                        <h2 className="display-5">Sign in using Facebook</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <SocialLoginButton func={this.handleFacebookLogin} />
                </div>
            </div>
        </div>
    );

    handleFacebookLogin = e => {
        e.preventDefault();
       Meteor.signInWithFacebook ({}, function (error, mergedUserId) {
            // mergedUsers is set if a merge occured
            if (mergedUserId) {
            console.log(mergedUserId, 'merged with', Meteor.userId());
            }
        });
    };

    handleTwitterLogin = e => {
        e.preventDefault();
        Meteor.signInWithTwitter ({}, function (error, mergedUserId) {
            // mergedUsers is set if a merge occured
            if (mergedUserId) {
            console.log(mergedUserId, 'merged with', Meteor.userId());
            }
        });
    };

    render() {
        return(
            <div>
                {this.props.currentUser ?
                (
                    <div className="overflow-wrapper">
                        <div className="containerTest twitter">
                            { this.checkForLoginTwitter() }
                        </div>
                        <div className="containerTest facebook">
                            { this.checkForLoginFacebook() }
                        </div>
                    </div>
                ):("")}
            </div>
        );
    }
}

export default AppContainer;