import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App Routes={Routes} Route={Route} Link={Link} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

