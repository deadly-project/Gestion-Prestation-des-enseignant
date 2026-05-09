import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <nav>

            <Link to="/dashboard">
                <IoHomeOutline />
                 dashboard
            </Link>
            {" | "}
            <Link to="/addEnseignant">
                <IoIosPersonAdd />
                Ajouter un enseignant
            </Link>

            {" | "}

            <FiLogOut onClick={logout}/>

        </nav>

    );

}

