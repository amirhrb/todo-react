import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import DataContexProvider from './contexts/DataContexProvider';

ReactDOM.render(
  <DataContexProvider>
    <App/>
  </DataContexProvider>,
  document.getElementById('root')
);