import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentApp from './ParentApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ParentApp />, document.getElementById('root'));
registerServiceWorker();
