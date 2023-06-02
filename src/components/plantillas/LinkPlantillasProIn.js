import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function LinkPlantillasProIn() {
  const navigate = useNavigate();
  const ruta1 = "/gestionar-plantillas-de-productos";
  const ruta2 = "/gestionar-plantillas-de-insumos";
  const ruta3 = "/";

  const [plantillasProductos, setPlantillasProductos] = useState([]);
  let plantillasProductosCount = plantillasProductos.length;
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta3);
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

  const [plantillasInsumos, setPlantillasInsumos] = useState([]);
  let plantillasInsumosCount = plantillasInsumos.length;
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta3);
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
      <Col className="ColPlantillaProducto">
        <button
          onClick={() => navigate(ruta1)}
          className="gestionarPlanProLink"
        >
          <p className="PlanProInDescrip">
            <b>
              Plantillas <br />
              de <br />
              Productos
            </b>
          </p>
          <p className="cantidadProIn">
            Plantillas Registradas:
            <br />
            {plantillasProductosCount}
          </p>
          <p className="mensaje-aviso">Click para gestionar</p>
        </button>
      </Col>
      <Col className="ColPlantillaInsumo">
        <button onClick={() => navigate(ruta2)} className="gestionarPlanInLink">
          <p className="PlanProInDescrip">
            <b>
              Plantillas <br />
              de <br />
              Insumos
            </b>
          </p>
          <p className="cantidadProIn">
            Plantillas Registradas:
            <br />
            {plantillasInsumosCount}
          </p>
          <p className="mensaje-aviso">Click para gestionar</p>
        </button>
      </Col>
    </>
  );
}

export default LinkPlantillasProIn;
