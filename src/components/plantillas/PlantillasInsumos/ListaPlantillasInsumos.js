import { useState } from "react";

function ListaPlantillasInsumos({ plantilla }) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <li key={plantilla.id}>
        <div className="format-plantilla">
          <div className={showDescription ? "opciones2" : "opciones"}>
            <p className="sizeNombrePlantilla">{plantilla.nombre}</p>
            <p>
              <b>Insumos registrados:</b>
              <br />
              45
            </p>
            <div onClick={() => setShowDescription(!showDescription)}>
              {showDescription ? (
                <i className="bi bi-eye-fill visibility2"></i>
              ) : (
                <i className="bi bi-eye visibility2"></i>
              )}
            </div>
            <i className="bi bi-play-fill visibility2"></i>
            <i className="bi bi-pen-fill visibility2"></i>
            <i className="bi bi-trash3-fill visibility2"></i>
          </div>

          {showDescription ? (
            <p className="descriptionPlanIn">{plantilla.description}</p>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    </>
  );
}

export default ListaPlantillasInsumos;