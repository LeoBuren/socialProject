import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

class SocialLoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  render() {
    return(
      <button className="btn btn-outline-light loginBtn btn-lg btn-block" onClick={this.props.func}>Sign in</button>
    );
  }
}

export default SocialLoginButton;