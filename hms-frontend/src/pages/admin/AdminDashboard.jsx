import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function AdminDashboard() {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {

    try {

      const res = await API.get("/admin/reports/doctor");

      const labels = Object.keys(res.data);
      const values = Object.values(res.data);

      setChartData({
        labels,
        datasets: [
          {
            label: "Appointments per Doctor",
            data: values,
            backgroundColor: "rgba(59,130,246,0.6)"
          }
        ]
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (

    <DashboardLayout>

      <h1 className="text-2xl mb-4">
        Admin Dashboard
      </h1>

      {chartData && <Bar key="adminChart" data={chartData} />}

    </DashboardLayout>

  );

}

export default AdminDashboard;