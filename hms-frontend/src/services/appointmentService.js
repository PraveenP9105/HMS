import API from "./api";

/* Patient: book appointment */
export const bookAppointment = async (data) => {
  const res = await API.post("/patient/book", data);
  return res.data;
};

/* Patient: view my appointments */
export const getMyAppointments = async (patientId) => {
  const res = await API.get(`/patient/appointments/${patientId}`);
  return res.data;
};

/* Doctor: view appointments */
export const getDoctorAppointments = async (doctorId) => {
  const res = await API.get(`/doctor/appointments/${doctorId}`);
  return res.data;
};

/* Doctor: confirm appointment */
export const confirmAppointment = async (appointmentId) => {
  const res = await API.put(`/doctor/confirm/${appointmentId}`);
  return res.data;
};

/* Admin: cancel appointment */
export const cancelAppointment = async (appointmentId) => {
  const res = await API.put(`/admin/cancel/${appointmentId}`);
  return res.data;
};