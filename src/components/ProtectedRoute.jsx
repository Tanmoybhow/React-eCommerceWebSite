import { Navigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const  {isSignedIn}  = useUser();

  if (!isSignedIn) {
    toast.error("Need to login first")
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;