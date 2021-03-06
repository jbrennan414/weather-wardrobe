import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

function initializeReactGA() {
    ReactGA.initialize("UA-162041987-1");
    ReactGA.pageview('/');
}

initializeReactGA();

ReactDOM.render(<App currentTime={time} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
