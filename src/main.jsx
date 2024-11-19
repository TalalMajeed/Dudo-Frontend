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
import Dashboard from './pages/Dashboard/index.jsx'
import Login from './pages/Login/index.jsx'
import Register from './pages/Register/index.jsx'
import KanBan from './pages/Kanban/index.jsx'
import Calander from './pages/Calander/index.jsx'
import Chat from './pages/Chat/index.jsx';
const AppContext = React.createContext({});

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
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
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/kanban",
        element: <KanBan/>
    },
    {
        path: "/calendar",
        element: <Calander/>
    },
    {
        path: "/chat",
        element: <Chat/>
    },
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

