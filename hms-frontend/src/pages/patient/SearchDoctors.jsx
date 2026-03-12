import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";
import DoctorCard from "../../components/DoctorCard";

function SearchDoctors() {

  const [doctors,setDoctors] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{

    fetchDoctors();

  },[]);

  const fetchDoctors = async () =>{

    const res = await API.get("/patient/doctors");

    setDoctors(res.data);

  };

  const filteredDoctors = doctors.filter((doc)=>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-4">
        Find Doctors
      </h1>

      {/* SEARCH BOX */}

      <input
        type="text"
        placeholder="Search by name or specialization..."
        className="border p-2 w-full mb-6 rounded"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {/* DOCTOR LIST */}

      <div className="grid grid-cols-3 gap-6">

        {filteredDoctors.map(doc=>(
          <DoctorCard key={doc.id} doctor={doc}/>
        ))}

      </div>

    </DashboardLayout>

  );

}

export default SearchDoctors;