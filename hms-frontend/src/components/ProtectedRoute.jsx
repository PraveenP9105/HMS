import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  const userRole = localStorage.getItem("role");

  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;