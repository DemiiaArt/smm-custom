import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './Theme/style.scss'
import App from './App.js';
// import Main from './pages/Main.jsx'
import More from './pages/More.jsx'
import Visual from './Components/Options/Visual.jsx'
import Consult from './Components/Options/Consult.jsx';
import Target from './Components/Options/Target.jsx';
import Verstka from './Components/Options/Verstka.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/More",
    element: <More />,
    children: [
      {
        path: "/More/Visual",
    element: <Visual />,
      },
      {
        path: "/More/Consultation",
    element: <Consult />,
      },
      {
        path: "/More/Target",
    element: <Target />,
      },
      {
        path: "/More/WebDevelop",
    element: <Verstka />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

