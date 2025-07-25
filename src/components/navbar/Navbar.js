import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					ReactShop
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/wishlist" className="nav-link">
								Wish list
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
