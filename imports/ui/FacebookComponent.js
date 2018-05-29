import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { HTTP } from 'meteor/http';

class FacebookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  getProfilePicture = accessToken => {
      try {
        const result = HTTP.call('GET', "https://graph.facebook.com/me", {
      params: {
        access_token: accessToken,
        fields: 'picture'
      }});

      return true; // return the picture's url
      } catch (e) {
        console.log(e);
      }

      return result.data.picture.data.url;
  };

  render() {
      let facebook = this.props.currentUser.services.facebook;
    return(
        <div className="signInContainer facebook socialComponentWrapper">
            <div className="socialContainer facebook socialComponentWrapper">
                <img className="profile_picture" src={this.getProfilePicture(facebook.acessToken)} />
                <h2 className="text-center display-4">{facebook.name}</h2>
                <hr />
            </div>
        </div>
    );
  }
}

export default FacebookComponent;