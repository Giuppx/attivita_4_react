function Product({ product, key }) {
	return (
		<>
			<div className="card mb-3 h-auto" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4 text-center mt-4 p-2">
						<img
							src={product.image}
							className="img-fluid rounded"
							alt={product.title}
							style={{ height: "150px", objectFit: "contain" }}
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{product.title}</h5>
							<p className="card-text">{product.description}</p>
							<p className="card-text">
								<small className="text-muted">Price: {product.price}</small>
							</p>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-end my-2">
					<button className="btn btn-primary">Save on wishlist</button>
				</div>
			</div>
		</>
	);
}

export default Product;
