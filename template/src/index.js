/* since React ver 18 */
import App from './App';
import {createRoot} from "react-dom/client";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

/* till React ver 17:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/