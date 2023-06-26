import { useState } from "react";

function ListaProductos({
  producto,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setDeletePro,
  setUpdatePro,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const styles = {
    divColor: {
      transition: "all 0.3s ease",
      backgroundColor: `${producto.color}`,
      width: "40px",
      height: "40px",
      border: "5px ridge rgb(204, 199, 199)",
      boxShadow: "0 0.1rem 0.4rem rgba(0, 0, 0, 0.315)",
    },
  };
  return (
    <>
      <li key={producto.id}>
        <div className="format-producto">
          <div className={showDescription ? "opciones2" : "opciones"}>
            <p className="nombreProducto">{producto.nombre}</p>
            <div className="colorPro">
              <b>Color:</b>
              <br />
              <div style={styles.divColor}></div>
            </div>
            <p>
              <b>Productos registrados:</b>
              <br />
              <span className="cantidadProducto">{producto.cantidad}</span>
            </p>
            <p>
              <b>Precio Unitario:</b>
              <br />
              <span className="precioUnitarioPro">
                {producto.precioUnitario}
              </span>
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
                  setUpdatePro(producto);
                }}
              ></i>
              <i
                className="bi bi-trash3-fill visibility2"
                onClick={() => {
                  setEstado3(!estado3);
                  setDeletePro(producto.nombre);
                }}
              ></i>
            </div>
          </div>

          {showDescription ? (
            <p className="descriptionPro">{producto.description}</p>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    </>
  );
}

export default ListaProductos;
