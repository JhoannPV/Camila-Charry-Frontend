import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function OnePlantillaProducto({
  plantilla,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setShowPlantillas,
}) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <div className="format-mas-button">
        <div className="format-plantilla">
          <div className={showDescription ? "opciones2" : "opciones"}>
            <p className="nombrePlantilla">{plantilla.nombre}</p>
            <p>
              <b>Productos registrados:</b>
              <br />
              <span className="cantidadPlantilla">45</span>
            </p>
            <div onClick={() => setShowDescription(!showDescription)}>
              {showDescription ? (
                <i className="bi bi-eye-fill visibility2"></i>
              ) : (
                <i className="bi bi-eye visibility2"></i>
              )}
            </div>
            <i className="bi bi-play-fill visibility2"></i>
            <i
              className="bi bi-pen-fill visibility2"
              onClick={() => setEstado2(!estado2)}
            ></i>
            <i
              className="bi bi-trash3-fill visibility2"
              onClick={() => setEstado3(!estado3)}
            ></i>
          </div>

          {showDescription ? (
            <p className="descriptionPlanPro">{plantilla.description}</p>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <Button
            variant="danger"
            className="mostrarAllPlantillas"
            onClick={() => setShowPlantillas(false)}
          >
            Mostrar todas las Plantillas
          </Button>
        </div>
      </div>
    </>
  );
}

export default OnePlantillaProducto;
