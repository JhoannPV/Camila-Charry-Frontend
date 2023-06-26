import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./ProIn.css";

function OpcionesDeleteProIn({
  Pro_o_In,
  setEstadoModal3,
  deleteProIn,
  ProIn,
  PlantillaProIn,
}) {
  const nombre = deleteProIn;

  const token = localStorage.getItem("jwt-token");
  let data = { nombre, PlantillaProIn };

  const handleclick = async () => {
    try {
      const url = `http://localhost:3001/api/v1/${Pro_o_In}`;
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.data === null) {
        toast.error(`${ProIn} no encontrado`);
      } else {
        toast.success(`${ProIn} Eliminado`);
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
      <div className="DeleteProIn">
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

export default OpcionesDeleteProIn;
