import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function MyAppointments(){

  const [appointments,setAppointments] = useState([]);
  const [doctors,setDoctors] = useState({});

  const patientId = localStorage.getItem("userId");

  useEffect(()=>{

    fetchAppointments();
    fetchDoctors();

  },[]);

  const fetchAppointments = async ()=>{

    const res = await API.get(`/patient/appointments/${patientId}`);
    setAppointments(res.data);

  };

  const fetchDoctors = async ()=>{

    const res = await API.get("/patient/doctors");

    const map = {};

    res.data.forEach(d=>{
      map[d.id] = d;
    });

    setDoctors(map);

  };

  return(

    <DashboardLayout>

      <h1 className="text-2xl mb-4">
        My Appointments
      </h1>

      <table className="table-auto w-full bg-white shadow">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-2">Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map(a=>{

            const doctor = doctors[a.doctorId];

            return(
              <tr key={a.id} className="border-b">

                <td className="p-2">

                  {doctor
                    ? `${doctor.name} (${doctor.specialization})`
                    : a.doctorId}

                </td>

                <td>{a.appointmentDate}</td>
                <td>{a.startTime}</td>
                <td>{a.status}</td>

              </tr>
            );

          })}

        </tbody>

      </table>

    </DashboardLayout>

  );

}

export default MyAppointments;