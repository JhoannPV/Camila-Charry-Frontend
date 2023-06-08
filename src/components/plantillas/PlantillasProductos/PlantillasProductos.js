import "./PlantillasProductos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PlantillasProductos() {
  const navigate = useNavigate();
  const ruta = "/";

  const [plantillasProductos, setPlantillasProductos] = useState([]);
  let plantillasProductosCount = plantillasProductos.length;
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
      <h1>Plantillas de Productos</h1>
      <p>{plantillasProductosCount}</p>
    </>
  );
}

export default PlantillasProductos;
