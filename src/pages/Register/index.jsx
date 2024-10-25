import TeamInfo from './teamInfo';
import AdminRegister from './adminRegister';
import Customization from './customization';
import Verification from './verification';
import { useState } from 'react';

function Register() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (!page || page == "1") {
        return <TeamInfo />
    }
    if (page == "2") {
        return <AdminRegister />
    }
    if (page == "3") {
        return <Verification />
    }
    if (page == "4") {
        return <Customization />
    }
    return <Register />
}

export default Register;