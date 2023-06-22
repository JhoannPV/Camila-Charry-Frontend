import "./BackButton.css";
import { useNavigate } from "react-router-dom";

function BackButton({ ruta }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="backButton"
        onClick={() => {
          navigate(ruta);
        }}
      >
        <i className="bi bi-arrow-left sizeArrow"></i>
      </button>
    </>
  );
}

export default BackButton;
