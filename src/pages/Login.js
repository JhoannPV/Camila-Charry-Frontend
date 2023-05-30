import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <button type="submit">
        <Link to="/plantillas" className="linkPlantillas">
          Signin
        </Link>
      </button>
    </>
  );
}

export default Login;
