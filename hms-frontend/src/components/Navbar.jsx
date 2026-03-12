import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../utils/theme";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (

        <div className="flex justify-between items-center bg-blue-600 text-white p-4">

            <h1 className="text-xl font-bold">
                Hospital Management System
            </h1>

            <button
                onClick={toggleTheme}
                className="bg-gray-700 px-3 py-1 rounded"
            >
                Toggle Theme
            </button>

            <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded"
            >
                Logout
            </button>

        </div>
    );
}

export default Navbar;