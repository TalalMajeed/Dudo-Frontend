import TeamInfo from './teamInfo';
import AdminRegister from './adminRegister';
import Customization from './customization';
import Verification from './verification';
import { useLocation } from 'react-router-dom';

function Register() {
    const location = useLocation(); // Get the current location (URL)
    const urlParams = new URLSearchParams(location.search); // Get the query parameters
    const page = urlParams.get('page'); // Extract the 'page' param

    // Based on 'page' param, render the corresponding component
    if (!page || page === "1") {
        return <TeamInfo />
    }
    if (page === "2") {
        return <AdminRegister />
    }
    if (page === "3") {
        return <Verification />
    }
    if (page === "4") {
        return <Customization />
    }
    return <Register /> // Default case (should never hit unless URL is malformed)
}

export default Register;