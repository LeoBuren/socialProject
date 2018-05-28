import React from 'react';
import Header from './Header';
import AppContainer from './AppContainer';

//import "./../node_modules/bootstrap/scss/bootstrap.scss";
//import PrivateHeader from './PrivateHeader';
import './styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

export default () => {
  return (
    <div id="appContainer">
      <main>
        <Header />
        <AppContainer />
      </main>
    </div>
  );
};
