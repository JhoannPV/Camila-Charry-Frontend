import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function OpcionesDeletePlantilla({
  Pro_o_In,
  setEstadoModal3,
  deletePlantilla,
}) {
  const nombre = deletePlantilla;

  const token = localStorage.getItem("jwt-token");
  let data = { nombre };

  const handleclick = async () => {
    try {
      const url = `http://localhost:3001/api/v1/plantillas-${Pro_o_In}`;
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.data === null) {
        toast.error("Plantilla no encontrada");
      } else {
        toast.success("Plantilla Eliminada");
        setTimeout(() => {
          setEstadoModal3(false);
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error("Fallo: " + error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="DeletePlantilla">
        <p>¿Desea eliminar esta Plantilla?</p>
        <Row className="opcionesDelete">
          <Col>
            <Button
              variant="light"
              className="opcionesDeleteSombreado"
              onClick={() => setEstadoModal3(false)}
            >
              Cancelar
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="opcionesDeleteSombreado"
              onClick={handleclick}
            >
              Continuar
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OpcionesDeletePlantilla;
