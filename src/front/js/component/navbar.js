import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				
				<div className="ml-auto">
					{ !store.token ?
						<Link to="/">
							<button className="btn btn-primary">Home</button>
						</Link>
						:
						<button onClick={() => actions.logout()} className="btn btn-primary">Logout</button>
					}
					
				</div>
			</div>
		</nav>
	);
};