import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Meteor } from 'meteor/meteor';
import { Tweets } from '../api/tweets';

class TwitterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };

    console.log(this.props.tweets);
  }

  render() {
    let twitter = this.props.currentUser.services.twitter;

    return(
        <div className="signInContainer twitter socialComponentWrapper bg-1">
            <div className="socialContainer twitter socialComponentWrapper twitterBorder">
              <img className="social-media-icon-top" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
              <div className="profile-picture-container">
                <img className="profile-picture" src={twitter.profile_image_url} />
              </div>
              <h2 className="text-center display-4">{twitter.screenName}</h2>
              <hr />
              <br />
              <h1>Data from Twitters API</h1>
              <br />
              <dl className="row">
                <dt className="col-sm-3">Language</dt>
                <dd className="col-sm-9">{twitter.lang}</dd>
                <dt className="col-sm-3">Id</dt>
                <dd className="col-sm-9">{twitter.id}</dd>
                <dt className="col-sm-3">Screen name</dt>
                <dd className="col-sm-9">{twitter.screenName}</dd>
                <dt className="col-sm-3">AccessToken</dt>
                <dd className="col-sm-9 text-truncate">{twitter.accessToken}</dd>
                <dt className="col-sm-3">Profile image url [http]</dt>
                <dd className="col-sm-9 text-truncate">{twitter.profile_image_url}</dd>
                <dt className="col-sm-3">Profile image url [https]</dt>
                <dd className="col-sm-9 text-truncate">{twitter.profile_image_url_https}</dd>
              </dl>

              <hr />
            </div>
        </div>
    );
  }
}

export default TwitterComponent;