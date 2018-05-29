import React from 'react';
import Header from './Header';
import AppContainer from './AppContainer';
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';
import { Tweets } from '../api/tweets';

//import "./../node_modules/bootstrap/scss/bootstrap.scss";
//import PrivateHeader from './PrivateHeader';
import './styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

class Dashboard extends React.Component {
  render() {
    return (
      <div id="appContainer">
        <main>
          <Header />
          <AppContainer currentUser={this.props.users} tweets={this.props.tweets} />
        </main>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('userData');
  Meteor.subscribe('Tweets');

  return {
    users: Meteor.user(),
    tweets: Tweets.find().fetch(),
  };
})(Dashboard);
