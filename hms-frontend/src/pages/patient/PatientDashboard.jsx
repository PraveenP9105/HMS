import DashboardLayout from "../../components/DashboardLayout";

function PatientDashboard(){

  return(

    <DashboardLayout>

      <h1 className="text-2xl font-bold">
        Patient Dashboard
      </h1>

      <p className="mt-4">
        Welcome to the hospital appointment system.
      </p>

    </DashboardLayout>

  );

}

export default PatientDashboard;