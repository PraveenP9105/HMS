import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";
import DoctorCard from "../../components/DoctorCard";

function SearchDoctors() {

  const [doctors,setDoctors] = useState([]);

  useEffect(()=>{

    fetchDoctors();

  },[]);

  const fetchDoctors = async () =>{

    const res = await API.get("/patient/doctors");

    setDoctors(res.data);

  };

  return(

    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-4">
        Available Doctors
      </h1>

      <div className="grid grid-cols-3 gap-4">

        {doctors.map(doc=>(
          <DoctorCard key={doc.id} doctor={doc}/>
        ))}

      </div>

    </DashboardLayout>

  );

}

export default SearchDoctors;