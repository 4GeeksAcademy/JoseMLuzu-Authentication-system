// src/front/js/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 

        navigate('/login');
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="btn btn-danger btn-lg"
        >
            Cerrar sesión
        </button>
    );
};
