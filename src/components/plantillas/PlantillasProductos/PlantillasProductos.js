import "./PlantillasProductos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaPlantillasProductos from "./ListaPlantillasProductos";

function PlantillasProductos() {
  const navigate = useNavigate();
  const ruta = "/";
  const [plantillasProductos, setPlantillasProductos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta);
    } else {
      const getPlantillasProductos = async () => {
        try {
          const url = "http://localhost:3001/api/v1/plantillas-productos";
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPlantillasProductos(result.data.data);
        } catch (error) {
          toast.error("Fallo:" + error);
        }
      };
      getPlantillasProductos();
    }
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <div className="contenido-plaP">
        <ul className="lista-plantillas-productos">
          {plantillasProductos.map((plantilla) => {
            return (
              <>
                <ListaPlantillasProductos plantilla={plantilla} />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PlantillasProductos;
