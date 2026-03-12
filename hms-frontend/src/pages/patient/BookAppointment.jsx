import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function BookAppointment(){

  const { doctorId } = useParams();

  const [form,setForm] = useState({
    appointmentDate:"",
    startTime:"",
    endTime:"",
    departmentId:1
  });

  const book = async () =>{

    const patientId = localStorage.getItem("userId");

    await API.post(`/patient/book/${patientId}`,{
      doctorId,
      ...form
    });

    alert("Appointment booked");

  };

  return(

    <DashboardLayout>

      <h1 className="text-2xl mb-4">
        Book Appointment
      </h1>

      <div className="bg-white p-4 rounded shadow w-96">

        <input
          type="date"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setForm({...form,appointmentDate:e.target.value})}
        />

        <input
          type="time"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setForm({...form,startTime:e.target.value})}
        />

        <input
          type="time"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setForm({...form,endTime:e.target.value})}
        />

        <button
          onClick={book}
          className="bg-green-500 text-white p-2 w-full"
        >
          Confirm Appointment
        </button>

      </div>

    </DashboardLayout>

  );
}

export default BookAppointment;