import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../src/index.css'

import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true, 
                element: <Home />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />
)