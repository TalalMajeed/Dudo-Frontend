import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Panel from "./pages/Panel";

import { ConfigProvider } from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#7040d7",
                },
            }}
        >
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/welcome" replace />}
                    />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/panel" element={<Panel />} />
                    <Route
                        path="*"
                        element={
                            <Error
                                error="404"
                                description="The Requested Resource was not found :("
                            />
                        }
                    />
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
