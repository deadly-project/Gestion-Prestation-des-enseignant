import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <nav>

            <Link to="/dashboard">
                Dashboard
            </Link>
            {" | "}
            <Link to="/setting">
                setting
            </Link>
            {" | "}
            <Link to="/addEnseignant">
                Ajouter un enseignant
            </Link>
            {" | "}
            <Link to="/dashboard">
                Dashboard
            </Link>

            {" | "}

            <button onClick={logout}>
                Logout
            </button>

        </nav>

    );

}

