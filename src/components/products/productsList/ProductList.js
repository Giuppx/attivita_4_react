import Product from "../product/Product";

function ProductList({ products, addToWishlist, isLoggedIn }) {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 d-flex flex-wrap justify-content-evenly">
						{products.map((product, index) => {
							return (
								<Product
									key={index}
									product={product}
									addToWishlist={addToWishlist}
									isLoggedIn={isLoggedIn}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductList;
