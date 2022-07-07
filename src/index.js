// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);