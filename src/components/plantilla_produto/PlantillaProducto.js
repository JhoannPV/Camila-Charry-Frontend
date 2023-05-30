import "./PlantillaProducto.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GestionarPlantillas from "./GestionarPlantillas";

function PlantillaProducto() {
  let menuplantilla = [1, 2];
  return (
    <>
      <Row className="container-fluid RowPlantillaProIns">
        <Col className="ColPlantillaProducto">
          <div className="PlantillaProducto">
            <p className="PlanProInDescrip">
              Plantillas <br />
              de <br />
              Productos
            </p>
            <p className="cantidadProIn">
              Plantillas Registradas:
              <br />
              45
            </p>
            <GestionarPlantillas menuplantilla={menuplantilla[0]} />
          </div>
        </Col>
        <Col className="ColPlantillaInsumo">
          <div className="PlantillaInsumo">
            <p className="PlanProInDescrip">
              Plantillas <br />
              de <br />
              Insumos
            </p>
            <p className="cantidadProIn">
              Plantillas Registradas:
              <br />
              45
            </p>
            <GestionarPlantillas menuplantilla={menuplantilla[1]} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PlantillaProducto;
