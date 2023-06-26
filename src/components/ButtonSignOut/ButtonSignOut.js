import "./ButtonSignOut.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ButtonSignOut() {
  const navigate = useNavigate();
  function handleSignOut() {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("plantillaProducto");
    localStorage.removeItem("plantillaInsumo");
    navigate("/login");
    window.location.reload();
  }
  return (
    <>
      <div className="signOut">
        <Button
          variant="danger"
          className="signOutButton"
          onClick={handleSignOut}
        >
          <p>SignOut</p>
          <i className="bi bi-power signOutIcon"></i>
        </Button>
      </div>
    </>
  );
}

export default ButtonSignOut;
