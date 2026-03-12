import { useState } from "react";
import { login, getCurrentUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await login(form);

      localStorage.setItem("token", res.data);

      const user = await getCurrentUser();

      localStorage.setItem("userId", user.data.id);
      localStorage.setItem("role", user.data.role);

      if(user.data.role === "ADMIN")
        navigate("/admin");

      else if(user.data.role === "DOCTOR")
        navigate("/doctor");

      else
        navigate("/patient");

    } catch {
      alert("Login failed");
    }
  };

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded p-8 w-96">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
        type="email"
        placeholder="Email"
        className="border w-full p-2 mb-3"
        onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
        type="password"
        placeholder="Password"
        className="border w-full p-2 mb-3"
        onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Login
        </button>

        <p className="mt-3 text-center">
          No account?  
          <Link to="/signup" className="text-blue-500 ml-1">
            Signup
          </Link>
        </p>

      </form>

    </div>

  );
}

export default LoginPage;