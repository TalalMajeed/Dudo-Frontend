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

const AppContext = React.createContext({});

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
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
