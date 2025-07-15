import { useEffect, useState } from "react";

function WishList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const wlist = window.localStorage.getItem("wishlist");
		setItems(JSON.parse(wlist));
	}, []);

	return (
		<>
			<div className="container-fluid mt-4">
				<div className="row">
					<div className="col-md-12">
						<h3>Your wishlist</h3>
						<hr />
					</div>
					<div className="col-md-12">
						{items.length > 0 ? (
							<ul className="list-group">
								{items.map((item, index) => {
									return (
										<li
											className="list-group-item d-flex align-items-center p-2"
											key={index}>
											<img
												className="mx-4"
												src={item.image}
												style={{ height: "150px", objectFit: "contain" }}
												title={item.title}
											/>
											<h5>{item.title}</h5>
										</li>
									);
								})}
							</ul>
						) : (
							<p>la ta wishlist è vuota!</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default WishList;
