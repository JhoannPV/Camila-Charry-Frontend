import { useState } from "react";

function ListaPlantillasProductos({
  plantilla,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setDeletePlantilla,
  setUpdatePlantilla,
}) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <li key={plantilla.id}>
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
            <i className="bi bi-plus-circle-fill visibility2"></i>
            <i
              className="bi bi-pen-fill visibility2"
              onClick={() => {
                setEstado2(!estado2);
                setUpdatePlantilla(plantilla);
              }}
            ></i>
            <i
              className="bi bi-trash3-fill visibility2"
              onClick={() => {
                setEstado3(!estado3);
                setDeletePlantilla(plantilla.nombre);
              }}
            ></i>
          </div>

          {showDescription ? (
            <p className="descriptionPlanPro">{plantilla.description}</p>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    </>
  );
}

export default ListaPlantillasProductos;
