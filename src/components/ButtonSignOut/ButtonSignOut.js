import "./ButtonSignOut.css";
import Button from "react-bootstrap/Button";

function ButtonSignOut() {
  function handleSignOut() {
    localStorage.removeItem("jwt-token");
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
