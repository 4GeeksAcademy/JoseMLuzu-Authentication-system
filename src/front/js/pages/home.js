import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="container-fluid py-5 text-center">
			<div className="row">
				<div className="col-12">
					<h1>Registro de usuarios</h1>
				</div>
			</div>
			<div className="card">
			</div>
			<div className="row mt-5">
				<div className="col-12 text-center">
					<button type="button" onClick={() => navigate("/login")} className="btn btn-primary btn-lg me-5">Inicia sesión</button>
					<button type="button" onClick={() => navigate("/register")} className="btn btn-success btn-lg">Regístrate</button>
				</div>
			</div>
		</div>
	);
};