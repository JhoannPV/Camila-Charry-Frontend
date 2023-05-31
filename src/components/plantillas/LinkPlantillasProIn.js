import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function LinkPlantillasProIn() {
  const navigate = useNavigate();
  let ruta1 = "/gestionar-plantillas-de-productos";
  let ruta2 = "/gestionar-plantillas-de-insumos";

  const [plantillasProductos, setPlantillasProductos] = useState([]);
  let plantillasProductosCount = plantillasProductos.length;
  useEffect(() => {
    const getPlantillasProductos = async () => {
      const url = "http://localhost:3001/api/v1/plantillas-productos";
      const result = await axios.get(url);
      setPlantillasProductos(result.data.data);
    };
    getPlantillasProductos();
  }, []);

  const [plantillasInsumos, setPlantillasInsumos] = useState([]);
  let plantillasInsumosCount = plantillasInsumos.length;
  useEffect(() => {
    const getPlantillasInsumos = async () => {
      const url = "http://localhost:3001/api/v1/plantillas-insumos";
      const result = await axios.get(url);
      setPlantillasInsumos(result.data.data);
    };
    getPlantillasInsumos();
  }, []);
  return (
    <>
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
