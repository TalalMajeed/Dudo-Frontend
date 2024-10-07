import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './global.scss'
import store from './store';
import Index from './pages/Index/index.jsx'
import { Provider } from 'react-redux'
import Panel from './pages/Panel/index.jsx'
import Login from './pages/Login/index.jsx'

const AppContext = React.createContext({});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/panel",
        element: <Panel />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);


const App = () => {
    return (
        <Provider store={store}>
            <AppContext.Provider value={{}}>
                <RouterProvider router={router} />
            </AppContext.Provider>
        </Provider>

    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
