// src/front/js/pages/dashboard.js
import React from "react";
import { LogoutButton } from "../component/logout"; // Asegúrate de que la ruta sea correcta

export const Dashboard = () => {
    return (
        <div className="container-fluid py-5 text-center">
            <div className="row">
                <div className="col-12">
                    <h1>Bienvenido</h1>
                </div>
            </div>
            <div className="card">
                {/* Puedes añadir contenido adicional aquí */}
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};
