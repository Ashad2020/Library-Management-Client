import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  let { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-center text-2xl">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate to="/signin" />;
  }
  return children;
}
