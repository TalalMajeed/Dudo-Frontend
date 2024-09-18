import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './global.scss'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from './store';
import Index from './pages/Index/index.jsx'
import { Provider } from 'react-redux'


const { palette } = createTheme();
const AppContext = React.createContext({});
const theme = createTheme({
    palette: {
        primary: palette.augmentColor({
            color: {
                main: "#3eba7d",
            },
        }),
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
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
