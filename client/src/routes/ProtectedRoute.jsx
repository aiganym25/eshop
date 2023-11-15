import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
    const useAuth = () => {
        const accessToken = localStorage.getItem("user");
        return !!accessToken;
    };
    const auth = useAuth();

    return (auth ? <Outlet /> : <Navigate to="/login" />)
}