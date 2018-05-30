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

    let twitter = this.props.currentUser.services.twitter;
    Meteor.call('getTwitterFeed', twitter.accessToken, twitter.accessTokenSecret);
  }

  iterateTweets = () => {
    if(this.props.tweets.length) {
      if (this.props.tweets[0].data) {
        let result = [];
        const data = this.props.tweets[0].data;
        for(i=0; i<this.props.tweets[0].data.length; i++) {
          // eslint-disable-next-line
          result.push(this.generateTweet(i, data));
        }
  
        return result;
      }
    }

    return <div className="loader">Loading...</div>;
  }

  generateTweet = (i, data) => (
      <div className="media text-muted pt-3 twitterContainer">
        <img className="mr-2 rounded" src={data[i].user.profile_image_url_https} alt="twitter profile picture" />
        <p className="media-body pb-3 mb-0 large lh-125 border-bottom border-gray twitter-text">
          <strong className="d-block text-gray-dark">{data[i].user.screen_name}</strong>
          {data[i].text}
        </p>
      </div>
  );


  render() {
    let twitter = this.props.currentUser.services.twitter;
    return(
        <div className="signInContainer twitter socialComponentWrapper bg-1">
            <div className="socialContainer twitter socialComponentWrapper twitterBorder">
              <img className="social-media-icon-top" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
              <div className="profile-picture-container">
                <img className="profile-picture" src={twitter.profile_image_url_https} />
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
              </dl>

              <hr />
              <h3 className= "pb-2 mb-0">Twitter feed</h3>
              <div className="my-3 p-3 bg-white rounded box-shadow tweet-overflow-container">    
                  {this.iterateTweets()}
              </div>
            </div>
        </div>
    );
  }
}

export default TwitterComponent;