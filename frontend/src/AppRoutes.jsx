import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import FacultyRoutes from "./faculty/FacultyRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faculty/*" element={<FacultyRoutes />} />
        </Routes>
    );
}

export default AppRoutes;