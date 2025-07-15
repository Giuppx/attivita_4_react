import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Home from "./components/home/Home";
import Navabar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Products from "./components/products/Products";
import WishList from "./components/wishlist/wishList";
import Login from "./components/login/Login";
import Error from "./error/Error";

function App() {
	// login
	const [isLoggedIn, setisLoggedIn] = useState(false);

	function login() {
		setisLoggedIn(true);
	}

	function logout() {
		setisLoggedIn(false);
	}

	return (
		<BrowserRouter>
			<Navabar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="products" element={<Products />} />
				<Route path="wish-list" element={<WishList />} />
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
