import { Link, useLocation } from "react-router-dom";
import { Home, Search, Calendar, UserPlus, BarChart3, Stethoscope } from "lucide-react";

function Sidebar() {

  const role = localStorage.getItem("role");
  const location = useLocation();

  const menuClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700"
    }`;

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">

      {/* LOGO */}
      <div className="px-6 py-6 border-b border-gray-700">
        <h1 className="text-lg font-bold tracking-wide whitespace-nowrap">
          HMS
        </h1>
      </div>

      {/* MENU */}
      <ul className="flex flex-col gap-2 px-4 mt-6">

        {role === "PATIENT" && (
          <>
            <li>
              <Link to="/patient" className={menuClass("/patient")}>
                <Home size={18} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/search-doctors" className={menuClass("/search-doctors")}>
                <Search size={18} />
                Search Doctors
              </Link>
            </li>

            <li>
              <Link to="/appointments" className={menuClass("/appointments")}>
                <Calendar size={18} />
                My Appointments
              </Link>
            </li>
          </>
        )}

        {role === "DOCTOR" && (
          <>
            <li>
              <Link to="/doctor" className={menuClass("/doctor")}>
                <Stethoscope size={18} />
                Doctor Dashboard
              </Link>
            </li>

            <li>
              <Link to="/doctor/appointments" className={menuClass("/doctor/appointments")}>
                <Calendar size={18} />
                Appointments
              </Link>
            </li>
          </>
        )}

        {role === "ADMIN" && (
          <>
            <li>
              <Link to="/admin" className={menuClass("/admin")}>
                <Home size={18} />
                Admin Dashboard
              </Link>
            </li>

            <li>
              <Link to="/admin/add-doctor" className={menuClass("/admin/add-doctor")}>
                <UserPlus size={18} />
                Add Doctor
              </Link>
            </li>

            <li>
              <Link to="/admin/reports" className={menuClass("/admin/reports")}>
                <BarChart3 size={18} />
                Reports
              </Link>
            </li>
          </>
        )}

      </ul>

      {/* FOOTER */}
      <div className="mt-auto p-4 border-t border-gray-700 text-sm text-gray-400">
        Hospital Management System
      </div>

    </div>
  );
}

export default Sidebar;