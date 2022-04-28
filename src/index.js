import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom'
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root') );
const container = document.getElementById("root");
const root = createRoot( document.getElementById("root") );
root.render( <App /> );


reportWebVitals();
