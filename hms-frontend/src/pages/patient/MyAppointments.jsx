import { useEffect,useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function MyAppointments(){

  const [appointments,setAppointments] = useState([]);

  const patientId = localStorage.getItem("userId");

  useEffect(()=>{

    fetchAppointments();

  },[]);

  const fetchAppointments = async ()=>{

    const res = await API.get(`/patient/appointments/${patientId}`);

    setAppointments(res.data);

  };

  return(

    <DashboardLayout>

      <h1 className="text-2xl mb-4">
        My Appointments
      </h1>

      <table className="table-auto w-full bg-white">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-2">Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map(a=>(
            <tr key={a.id}>

              <td>{a.doctorId}</td>
              <td>{a.appointmentDate}</td>
              <td>{a.startTime}</td>
              <td>{a.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </DashboardLayout>

  );

}

export default MyAppointments;