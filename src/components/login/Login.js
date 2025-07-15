import "./Login.css";

function Login({ login, logout, loginStatus }) {
	return (
		<>
			<div className="container d-flex flex-column align-items-center justify-content-center">
				<div id="btn_section" className="mb-2">
					<button
						className="btn btn-primary me-2"
						onClick={() => {
							login();
						}}>
						Login
					</button>
					<button
						className="btn btn-secondary"
						onClick={() => {
							logout();
						}}>
						logout
					</button>
				</div>
				<p>
					Login status: <span className="accent">{String(loginStatus)}</span>
				</p>
			</div>
		</>
	);
}

export default Login;
