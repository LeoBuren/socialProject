import React from 'react';
import Header from './Header';
import AppContainer from './AppContainer';
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';

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
          <AppContainer currentUser={this.props.users} />
        </main>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('userData');

  return {
    users: Meteor.user(),
  };
})(Dashboard);
