import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../components/contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log('private route user', user);
    if (loading) {
        return <div>Loading...</div>
    }
    if (user && user.uid) {
        return children;
    }
    return <div>
        <Navigate to="/login"></Navigate>
    </div>
};

export default PrivateRoute;