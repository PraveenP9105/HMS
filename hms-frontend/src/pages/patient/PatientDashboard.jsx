import DashboardLayout from "../../components/DashboardLayout";
import { Link } from "react-router-dom";

function PatientDashboard(){

  const userName = localStorage.getItem("name");

  return(

    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-2">
        Welcome {userName || "Patient"} 👋
      </h1>

      <p className="text-gray-600 mb-6">
        Manage your hospital appointments easily.
      </p>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-2 gap-6">

        <Link to="/search-doctors">

          <div className="bg-blue-500 text-white p-6 rounded-lg shadow hover:bg-blue-600 transition">

            <h2 className="text-lg font-semibold">
              Search Doctors
            </h2>

            <p className="text-sm mt-2">
              Find doctors by specialization
            </p>

          </div>

        </Link>

        <Link to="/appointments">

          <div className="bg-green-500 text-white p-6 rounded-lg shadow hover:bg-green-600 transition">

            <h2 className="text-lg font-semibold">
              My Appointments
            </h2>

            <p className="text-sm mt-2">
              View your booked appointments
            </p>

          </div>

        </Link>

      </div>

    </DashboardLayout>

  );

}

export default PatientDashboard;