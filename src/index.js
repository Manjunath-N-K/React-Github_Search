import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//domain dev-ufizw99o.us.auth0.com
//client id r0nfirnikTB7tK8d9CCluKNJnPHLZUGp

//trail version for meeting
//domain dev-21je-vbx.us.auth0.com
//client pSOVEITzJ3WJIVTJQtPrIcyN2PdhJ5nm

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider domain="dev-ufizw99o.us.auth0.com"
            clientId="r0nfirnikTB7tK8d9CCluKNJnPHLZUGp"
            redirectUri={window.location.origin}
            cacheLocation='localstorage'>
            <GithubProvider>
                <App />
          </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
