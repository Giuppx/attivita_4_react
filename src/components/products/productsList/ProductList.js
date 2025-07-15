import Product from "../product/Product";

function ProductList({ products }) {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 d-flex flex-wrap justify-content-evenly">
						{products.map((product, index) => {
							return <Product product={product} key={index} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductList;
