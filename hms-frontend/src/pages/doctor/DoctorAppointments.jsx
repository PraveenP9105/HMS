import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function DoctorAppointments() {

  const [appointments,setAppointments] = useState([]);
  const [patients,setPatients] = useState({});

  const doctorId = localStorage.getItem("userId");

  useEffect(()=>{

    load();
    loadPatients();

  },[]);

  const load = async ()=>{

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

  const confirm = async(id)=>{

    await API.put(`/doctor/confirm/${id}`);

    load();

  };

  return(

    <DashboardLayout>

      <h1 className="text-2xl mb-4 font-bold">
        All Appointments
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-2">Patient</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map(a=>{

            const patient = patients[a.patientId];

            return(

              <tr key={a.id} className="border-t">

                <td className="p-2">
                  {patient ? patient.name : a.patientId}
                </td>

                <td>{a.appointmentDate}</td>

                <td>{a.status}</td>

                <td>

                  {a.status === "BOOKED" && (

                    <button
                      onClick={()=>confirm(a.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Confirm
                    </button>

                  )}

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    </DashboardLayout>

  );

}

export default DoctorAppointments;