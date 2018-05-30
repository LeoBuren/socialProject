import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Meteor } from 'meteor/meteor';


class FacebookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }


  render() {
      let facebook = this.props.currentUser.services.facebook;
    return(
        <div className="signInContainer facebook socialComponentWrapper bg-1">
            <div className="socialContainer facebook socialComponentWrapper facebookBorder">
              <img className="social-media-icon-top facebook-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
              <div className="profile-picture-container">
                <img className="profile-picture" src={"https://graph.facebook.com/" + facebook.id + "/picture/?type=large"} />
              </div>
              <h2 className="text-center display-4">{facebook.name}</h2>
              <hr />
              <br />
              <h1>Data from Facebooks API</h1>
              <br />
              <dl className="row">
                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{facebook.email}</dd>
                <dt className="col-sm-3">Id</dt>
                <dd className="col-sm-9">{facebook.id}</dd>
                <dt className="col-sm-3">First name</dt>
                <dd className="col-sm-9">{facebook.first_name}</dd>
                <dt className="col-sm-3">Last name</dt>
                <dd className="col-sm-9">{facebook.last_name}</dd>
                <dt className="col-sm-3">AccessToken</dt>
                <dd className="col-sm-9 text-truncate">{facebook.accessToken}</dd>
              </dl>

              <hr />
            </div>
        </div>
    );
  }
}

export default FacebookComponent;