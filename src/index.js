import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/AppContainer';
import * as serviceWorker from './serviceWorker';

// create store here
// use Providers here

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
