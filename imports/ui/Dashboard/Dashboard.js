import React from 'react';
import Header from './../Header';
import TwitterLoginForm from './../TwitterLoginForm';
import FacebookLoginForm from './../FacebookLoginForm';
//import "./../node_modules/bootstrap/scss/bootstrap.scss";
//import PrivateHeader from './PrivateHeader';
import './Dashboard.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

//stateless functional component is different to className component
//<PrivateHeader title="Dashboard"/>
export default () => {
  return (
    <div id="appContainer">
      <main>
        <Header />
        
        <div className="containerTest twitter">
          <div className="socialContainer twitter">
            <div className="my-3 py-3">
              <h2 className="display-5">Sign in using Twitter</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <TwitterLoginForm />
            <img className="social-icon" src="https://image.flaticon.com/icons/svg/8/8800.svg" />
          </div>
        </div>

        <div className="containerTest facebook">
          <div className="socialContainer facebook">
            <div className="my-3 py-3">
              <h2 className="display-5">Sign in using Facebook</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <FacebookLoginForm />
            <img className="social-icon" src="https://image.flaticon.com/icons/svg/23/23730.svg" />
          </div>
        </div>

      </main>
    </div>
  );
};
