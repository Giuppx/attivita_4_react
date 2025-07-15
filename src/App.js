import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Home from "./components/home/Home";
import Navabar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Products from "./components/products/Products";
import WishList from "./components/wishlist/wishList";
import Login from "./components/login/Login";
import Error from "./error/Error";
import PrivateRouter from "./components/wishlist/PrivateRouter";

function App() {
	// login
	const [isLoggedIn, setisLoggedIn] = useState(false);

	function login() {
		setisLoggedIn(true);
	}

	function logout() {
		setisLoggedIn(false);
	}

	// prodotti
	const [products, setProducts] = useState([]);

	function getProducts() {
		fetch("https://fakestoreapi.com/products")
			.then((resp) => resp.json())
			.then((products) => setProducts([...products]))
			.catch((err) => console.log(err.message));
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<BrowserRouter>
			<Navabar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="products" element={<Products products={products} />} />
				<Route
					path="/wishlist"
					element={
						<PrivateRouter isLoggedIn={isLoggedIn}>
							<WishList />
						</PrivateRouter>
					}
				/>
				<Route
					path="Login"
					element={
						<Login login={login} logout={logout} loginStatus={isLoggedIn} />
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
