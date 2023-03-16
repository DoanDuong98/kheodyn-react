import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const { pathname } = useLocation();
    const publicRoute = ['/login', '/register'];

    if (publicRoute.includes(pathname) && !!user) {
        return <Navigate to="/dashboard" />;
    }
    if (!(publicRoute.includes(pathname) || user)) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};
