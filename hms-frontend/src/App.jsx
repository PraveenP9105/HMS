import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

import PatientDashboard from "./pages/patient/PatientDashboard";
import MyAppointments from "./pages/patient/MyAppointments";
import SearchDoctors from "./pages/patient/SearchDoctors";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddDoctor from "./pages/admin/AddDoctor";
import Reports from "./pages/admin/Reports";
import ProtectedRoute from "./components/ProtectedRoute";
import BookAppointment from "./pages/patient/BookAppointment";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/search-doctors" element={<SearchDoctors />} />

        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/book/:doctorId" element={<BookAppointment />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/add-doctor" element={<AddDoctor />} />
        <Route path="/admin/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;