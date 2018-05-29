import React from 'react';
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

class TwitterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  render() {
    return(
        <div className="signInContainer twitter socialComponentWrapper">
            <div className="socialContainer twitter socialComponentWrapper">
            
            </div>
        </div>
    );
  }
}

export default TwitterComponent;