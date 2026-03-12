import { Link } from "react-router-dom";

function Sidebar(){

  const role = localStorage.getItem("role");

  return(

    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h2 className="text-xl font-bold mb-6">
        Dashboard
      </h2>

      <ul className="space-y-3">

        {role === "PATIENT" && (
          <>
          <li><Link to="/patient">Dashboard</Link></li>
          <li><Link to="/search-doctors">Search Doctors</Link></li>
          <li><Link to="/appointments">My Appointments</Link></li>
          </>
        )}

        {role === "DOCTOR" && (
          <>
          <li><Link to="/doctor">Doctor Dashboard</Link></li>
          <li><Link to="/doctor/appointments">Appointments</Link></li>
          </>
        )}

        {role === "ADMIN" && (
          <>
          <li><Link to="/admin">Admin Dashboard</Link></li>
          <li><Link to="/admin/add-doctor">Add Doctor</Link></li>
          <li><Link to="/admin/reports">Reports</Link></li>
          </>
        )}

      </ul>

    </div>
  );
}

export default Sidebar;