import React from 'react';
import { Meteor } from 'meteor/meteor';
import SocialLoginButton from './SocialLoginButton';
import TwitterComponent from './TwitterComponent';
import FacebookComponent from './FacebookComponent';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    checkForLoginTwitter = () => Meteor.user().services ? Meteor.user().services.twitter ? 
        (<TwitterComponent currentUser={this.props.currentUser} />) : (
            <div className="signInContainer twitter">
                <div className="socialContainer twitter">
                    <img className="social-icon" alt="twitter icon" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
                    <div className="my-3 py-3">
                        <h2 className="display-5">Sign in using Twitter</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <SocialLoginButton func={this.handleTwitterLogin} />
                </div>
            </div>
        ):(<div className="signInContainer twitter"><div className="loader">Loading...</div></div>);


    checkForLoginFacebook = () => Meteor.user().services ? Meteor.user().services.facebook ? 
    (<FacebookComponent currentUser={this.props.currentUser} />) : (
        <div className="signInContainer facebook">
            <div className="socialContainer facebook">
                <img className="social-icon" alt="facebook icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
                <div className="my-3 py-3">
                    <h2 className="display-5">Sign in using Facebook</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>
                <SocialLoginButton func={this.handleFacebookLogin} />
            </div>
        </div>
    )
    : (<div className="signInContainer facebook"><div className="loader">Loading...</div></div>);

    handleFacebookLogin = e => {
        e.preventDefault();
       Meteor.signInWithFacebook ({
           requestPermissions: ['public_profile']
       }, function (error, mergedUserId) {
            // mergedUsers is set if a merge occured
            if (mergedUserId) {
            console.log(mergedUserId, 'merged with', Meteor.userId());
            }
            if(error) {
                console.log(error);
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
            if(error) {
                console.log(error);
            }
        });
    };

    render() {
        return(
            <div>
                {this.props.currentUser ?
                (
                    <div className="overflow-wrapper">
                            { this.checkForLoginTwitter() }
                            { this.checkForLoginFacebook() }
                    </div>
                ):("")}
            </div>
        );
    }
}

export default AppContainer;