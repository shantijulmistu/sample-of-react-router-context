import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error.message)
            })
    };
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to="/">Auth-Router-Context</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/home">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email ? <button onClick={handleSignOut} className="btn btn-sm ml-1">Sign out</button> :
                        <Link to="/login"><button onClick={handleSignOut} className="btn btn-sm">Sign In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;