import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/App.css';
import './assets/less/custom.less';
import './assets/scss/main.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import App from './components/App';
const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
