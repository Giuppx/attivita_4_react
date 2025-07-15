import { Link } from "react-router-dom";

import "./Error.css";

function Error() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-4 mt-5 d-flex flex-column align-items-center justify-content-center">
					<p className="m-0">pagina non torvata!</p>
					<h1 className="error">404</h1>
				</div>
				<div className="col-md-12 d-flex justify-content-center align-items-center">
					<Link to={"/"} className="btn btn-dark">
						Torna alla home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Error;
