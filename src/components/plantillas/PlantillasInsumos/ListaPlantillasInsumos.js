import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListaPlantillasInsumos({
  plantilla,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  setDeletePlantilla,
  setUpdatePlantilla,
  setPlanInsumo,
}) {
  const navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false);

  const [insumos, setInsumos] = useState([]);
  const insumosLength = insumos.length;
  const token = localStorage.getItem("jwt-token");
  const plantillaInId = plantilla.id;
  let data = { plantillaInId };
  try {
    const getInsumos = async () => {
      const url = "http://localhost:3001/api/v1/insumos/forPlanIn";
      const result = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInsumos(result.data.data);
    };
    getInsumos();
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
              <b>Insumos registrados:</b>
              <br />
              <span className="cantidadPlantilla">{insumosLength}</span>
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
                  setPlanInsumo(plantilla);
                  const ruta = `/gestionar-insumos/${plantilla.nombre}`;
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
