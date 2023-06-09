import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListaPlantillasProductos({
  plantilla,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setDeletePlantilla,
  setUpdatePlantilla,
  setPlanProducto,
}) {
  const navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false);

  const [productos, setProductos] = useState([]);
  const productosLength = productos.length;
  const token = localStorage.getItem("jwt-token");
  const plantillaProId = plantilla.id;
  let data = { plantillaProId };
  try {
    const getProductos = async () => {
      const url = "http://localhost:3001/api/v1/productos/forPlanPro";
      const result = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductos(result.data.data);
    };
    getProductos();
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <li key={plantilla.id}>
        <div className="format-plantilla">
          <div className={showDescription ? "opciones2" : "opciones"}>
            <p className="nombrePlantilla">{plantilla.nombre}</p>
            <p>
              <b>Productos registrados:</b>
              <br />
              <span className="cantidadPlantilla">{productosLength}</span>
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
                className="bi bi-plus-circle-fill visibility2"
                onClick={() => {
                  setPlanProducto(plantilla);
                  const ruta = `/gestionar-productos/${plantilla.nombre}`;
                  navigate(ruta);
                }}
              ></i>
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
