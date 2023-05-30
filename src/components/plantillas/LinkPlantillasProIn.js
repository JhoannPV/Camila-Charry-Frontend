import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function LinkPlantillasProIn() {
  let ruta1 = "/gestionar-plantillas-de-productos";
  let ruta2 = "/gestionar-plantillas-de-insumos";

  return (
    <>
      <Col className="ColPlantillaProducto">
        <Link to={ruta1} className="gestionarPlanProLink">
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
            45
          </p>
          <p className="mensaje-aviso">Click para gestionar</p>
        </Link>
      </Col>
      <Col className="ColPlantillaInsumo">
        <Link to={ruta2} className="gestionarPlanInLink">
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
            45
          </p>
          <p className="mensaje-aviso">Click para gestionar</p>
        </Link>
      </Col>
    </>
  );
}

export default LinkPlantillasProIn;
