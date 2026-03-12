import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function DoctorDashboard(){

  const [appointments,setAppointments] = useState([]);
  const [patients,setPatients] = useState({});

  const doctorId = localStorage.getItem("userId");

  useEffect(()=>{

    loadAppointments();
    loadPatients();

  },[]);

  const loadAppointments = async ()=>{

    const res = await API.get(`/doctor/appointments/${doctorId}`);

    setAppointments(res.data);

  };

  const loadPatients = async ()=>{

    const res = await API.get("/doctor/patients");

    const map = {};

    res.data.forEach(p=>{
      map[p.id] = p;
    });

    setPatients(map);

  };

  const today = new Date().toISOString().split("T")[0];

  const todayAppointments = appointments.filter(
    a => a.appointmentDate === today
  );

  return(

    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        Doctor Dashboard
      </h1>

      {/* STAT CARDS */}

      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-blue-500 text-white p-5 rounded shadow">
          <p>Total Appointments</p>
          <h2 className="text-2xl font-bold">
            {appointments.length}
          </h2>
        </div>

        <div className="bg-green-500 text-white p-5 rounded shadow">
          <p>Today's Appointments</p>
          <h2 className="text-2xl font-bold">
            {todayAppointments.length}
          </h2>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded shadow">
          <p>Upcoming</p>
          <h2 className="text-2xl font-bold">
            {appointments.filter(a=>a.status==="BOOKED").length}
          </h2>
        </div>

      </div>

      {/* TODAY SCHEDULE */}

      <h2 className="text-xl font-semibold mb-3">
        Today's Schedule
      </h2>

      {todayAppointments.length === 0 && (
        <p>No appointments today</p>
      )}

      {todayAppointments.map(a=>{

        const patient = patients[a.patientId];

        return(

          <div key={a.id} className="bg-white p-4 mb-3 shadow rounded">

            <p className="font-semibold">
              Patient: {patient ? patient.name : a.patientId}
            </p>

            <p>Date: {a.appointmentDate}</p>

            <p>Status: {a.status}</p>

          </div>

        );

      })}

    </DashboardLayout>

  );

}

export default DoctorDashboard;