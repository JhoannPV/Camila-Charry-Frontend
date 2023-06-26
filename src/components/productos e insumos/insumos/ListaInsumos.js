import { useState } from "react";

function ListaInsumos({
  insumo,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setDeleteIn,
  setUpdateIn,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const styles = {
    divColor: {
      transition: "all 0.3s ease",
      backgroundColor: `${insumo.color}`,
      width: "40px",
      height: "40px",
      border: "5px ridge rgb(204, 199, 199)",
      boxShadow: "0 0.1rem 0.4rem rgba(0, 0, 0, 0.315)",
    },
  };
  return (
    <>
      <li key={insumo.id}>
        <div className="format-insumo">
          <div className={showDescription ? "opciones2" : "opciones"}>
            <p className="nombreInsumo">{insumo.nombre}</p>
            <div className="colorIn">
              <b>Color:</b>
              <br />
              <div style={styles.divColor}></div>
            </div>
            <p>
              <b>Insumos registrados:</b>
              <br />
              <span className="cantidadInsumo">{insumo.cantidad}</span>
            </p>
            <p>
              <b>Precio Unitario:</b>
              <br />
              <span className="precioUnitarioIn">{insumo.precioUnitario}</span>
            </p>
            <div className="crud">
              <div onClick={() => setShowDescription(!showDescription)}>
                {showDescription ? (
                  <i className="bi bi-eye-fill visibility2"></i>
                ) : (
                  <i className="bi bi-eye visibility2"></i>
                )}
              </div>
              <i
                className="bi bi-pen-fill visibility2"
                onClick={() => {
                  setEstado2(!estado2);
                  setUpdateIn(insumo);
                }}
              ></i>
              <i
                className="bi bi-trash3-fill visibility2"
                onClick={() => {
                  setEstado3(!estado3);
                  setDeleteIn(insumo.nombre);
                }}
              ></i>
            </div>
          </div>

          {showDescription ? (
            <p className="descriptionIn">{insumo.description}</p>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    </>
  );
}

export default ListaInsumos;
