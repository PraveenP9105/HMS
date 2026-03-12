import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authService";

function SignupPage(){
  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
  });

  const handleSubmit = async (e) =>{

    e.preventDefault();

    try{

      await signup(form);

      alert("Account created");

      navigate("/");

    }catch{

      alert("Signup failed");

    }

  };

  return(

    <div className="flex justify-center items-center h-screen bg-gray-200">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Signup
        </h2>

        <input
          placeholder="Name"
          className="border w-full p-2 mb-3"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
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

        <input
          placeholder="Phone"
          className="border w-full p-2 mb-4"
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <button className="bg-green-500 text-white w-full p-2 rounded">
          Signup
        </button>

      </form>

    </div>
  );
}

export default SignupPage;