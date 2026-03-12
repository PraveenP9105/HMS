import { useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../components/DashboardLayout";

function AddDoctor() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        specialization: "",
        departmentId: 1
    });

    const submit = async () => {

        await API.post("/admin/create-doctor", form);

        alert("Doctor Created");

    }

    return (

        <DashboardLayout>

            <h1 className="text-2xl mb-4">Add Doctor</h1>

            <div className="bg-white p-6 w-96 shadow">

                <input placeholder="Name"
                    className="border w-full p-2 mb-2"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input placeholder="Email"
                    className="border w-full p-2 mb-2"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input placeholder="Password"
                    className="border w-full p-2 mb-2"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <input placeholder="Specialization"
                    className="border w-full p-2 mb-2"
                    onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                />

                <button
                    onClick={submit}
                    className="bg-green-600 text-white p-2 w-full">

                    Create Doctor

                </button>

            </div>

        </DashboardLayout>

    )

}

export default AddDoctor;