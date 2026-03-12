import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {

  const navigate = useNavigate();

  const bookAppointment = () => {
    navigate(`/book/${doctor.id}`);
  };

  return (

    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">

      <h2 className="text-xl font-bold">
        {doctor.name}
      </h2>

      <p className="text-gray-600">
        {doctor.specialization}
      </p>

      <button
        onClick={bookAppointment}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Book Appointment
      </button>

    </div>

  );
}

export default DoctorCard;