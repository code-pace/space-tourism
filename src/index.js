import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App Routes={Routes} Route={Route} Link={Link} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

