import { Navigate } from "react-router-dom";

function PrivateRouter({ children, isLoggedIn }) {
	console.log("controllo rotta");
	return isLoggedIn ? <>{children} </> : <Navigate to="/login"></Navigate>;
}

export default PrivateRouter;
