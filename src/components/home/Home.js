import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div className="container-fluid bg-light text-dark py-5">
				<div className="container text-center">
					<h1 className="display-4 fw-bold">Benvenuto nella nostra App!</h1>
					<p className="lead">
						Scopri prodotti fantastici e crea la tua wishlist personalizzata.
					</p>
					<Link className="btn btn-primary mt-3" to={"/products"}>
						Scopri i prodotti
					</Link>
				</div>
			</div>
		</>
	);
}
export default Home;
