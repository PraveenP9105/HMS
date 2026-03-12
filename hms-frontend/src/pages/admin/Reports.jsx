import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function Reports() {

    const [data, setData] = useState({});

    useEffect(() => {

        load();

    }, []);

    const load = async () => {

        const res = await API.get("/admin/reports/doctor");

        setData(res.data);

    }

    return (

        <DashboardLayout>

            <h1 className="text-2xl mb-4">Reports</h1>

            {Object.keys(data).map(d => (
                <div key={d} className="bg-white p-3 shadow mb-2">

                    Doctor {d} → {data[d]} appointments

                </div>
            ))}

        </DashboardLayout>

    )

}

export default Reports;