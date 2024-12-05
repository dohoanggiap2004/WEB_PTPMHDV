import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoleProtectedRoute = ({ children, requiredRole }) => {
    const {role} = useSelector((state) => state.auth.login); // Lấy vai trò người dùng từ Redux

    return role === requiredRole ? children : <Navigate to="/unauthorized" replace />;
};

export default RoleProtectedRoute;
