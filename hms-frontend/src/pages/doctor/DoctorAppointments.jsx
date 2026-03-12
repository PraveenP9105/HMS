import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function DoctorAppointments() {

    const [appointments, setAppointments] = useState([]);

    const doctorId = localStorage.getItem("userId");

    useEffect(() => {

        load();

    }, []);

    const load = async () => {

        const res = await API.get(`/doctor/appointments/${doctorId}`);

        setAppointments(res.data);

    }

    return (

        <DashboardLayout>

            <h1 className="text-2xl mb-4">Doctor Appointments</h1>

            {appointments.map(a => (
                <div key={a.id} className="bg-white shadow p-3 mb-2">

                    <p>Patient: {a.patientId}</p>
                    <p>Date: {a.appointmentDate}</p>
                    <p>Status: {a.status}</p>

                </div>
            ))}

        </DashboardLayout>

    )

}

export default DoctorAppointments;