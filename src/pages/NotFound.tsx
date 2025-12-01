import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Redirecting from non-existent route:", location.pathname);
  }, [location.pathname]);

  // Redirect to home page instead of showing 404
  return <Navigate to="/" replace />;
};

export default NotFound;
