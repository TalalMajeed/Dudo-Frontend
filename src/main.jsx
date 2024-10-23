import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './global.scss'
import store from './store';
import Index from './pages/Index/index.jsx'
import { Provider } from 'react-redux'
import Panel from './pages/Panel/index.jsx'
import Login from './pages/Login/index.jsx'
import Signup from './pages/Signup/index.jsx';
import Verification from './pages/Verification/index.jsx';
import TeamInfo from './pages/TeamInfo/index.jsx';
const AppContext = React.createContext({});

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: [
            'Raleway',
            'sans-serif',
        ].join(','),
    },
});

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
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/verification",
        element: <Verification />,
    },
    { path:"/teaminfo",
        element: <TeamInfo />,
    }
]);

const App = () => {
    return (
        <Provider store={store}>
            <AppContext.Provider value={{}}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </AppContext.Provider>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
