import "./PlantillasInsumos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaPlantillasInsumos from "./ListaPlantillasInsumos";

function PlantillasInsumos() {
  const navigate = useNavigate();
  const ruta = "/";
  const [plantillasInsumos, setPlantillasInsumos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta);
    } else {
      const getPlantillasInsumos = async () => {
        try {
          const url = "http://localhost:3001/api/v1/plantillas-insumos";
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPlantillasInsumos(result.data.data);
        } catch (error) {
          toast.error("Fallo:" + error);
        }
      };
      getPlantillasInsumos();
    }
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <div className="contenido-plaI">
        <ul className="lista-plantillas-insumos">
          {plantillasInsumos.map((plantilla) => {
            return (
              <>
                <ListaPlantillasInsumos plantilla={plantilla} />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PlantillasInsumos;
