import ProductList from "./productsList/ProductList";
function Products({ products, addToWishlist, isLoggedIn }) {
	return (
		<>
			<div className="container-fluid mt-3">
				<h3>Products</h3>
				<hr />
				<div className="row">
					<div className="col-md-12">
						{products.length > 0 ? (
							<ProductList
								products={products}
								addToWishlist={addToWishlist}
								isLoggedIn={isLoggedIn}
							/>
						) : (
							<p>non ci sono prodotti da mostrare</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Products;
