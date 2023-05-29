import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Header />
      <div className="contenido">
        <Row className="container-fluid RowProductoInsumo">
          <Col className="ColPlantillaProducto">
            <div className="PlantillaProducto"></div>
          </Col>
          <Col className="ColPlantillaInsumo">
            <div className="PlantillaInsumo"></div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default App;
