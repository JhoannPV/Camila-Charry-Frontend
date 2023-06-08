import "./PlantillasInsumos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PlantillasInsumos() {
  const navigate = useNavigate();
  const ruta = "/";

  const [plantillasInsumos, setPlantillasInsumos] = useState([]);
  let plantillasInsumosCount = plantillasInsumos.length;

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
      <h1>Plantillas de Insumos</h1>
      <p>{plantillasInsumosCount}</p>
    </>
  );
}

export default PlantillasInsumos;
