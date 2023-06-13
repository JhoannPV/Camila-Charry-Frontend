import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function ButtonBuscarPlantilla({ Pro_o_In, setPlantillas, setShowPlantillas }) {
  const [nombre, setNombre] = useState([]);

  const token = localStorage.getItem("jwt-token");
  let data = { nombre };

  const handleClick = async () => {
    try {
      const url = `http://localhost:3001/api/v1/plantillas-${Pro_o_In}`;
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlantillas(res.data.data);
      setShowPlantillas(true);
      if (res.data.data === null) {
        toast.error("Plantilla no encontrada");
      }
    } catch (error) {
      toast.error("Fallo: " + error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Form.Group className="mb-3 widthButtonBuscarPlantilla">
        <div className="buttonBusqueda">
          <Form.Control
            type="search"
            placeholder="Buscar Plantilla"
            aria-label="Buscar Plantilla"
            aria-describedby="button-buscar-plantilla"
            className="borderRadiusBusqueda"
            onChange={(ev) => setNombre(ev.target.value)}
          />
          <Button
            variant="primary"
            id="button-buscar-plantilla"
            onClick={() => handleClick()}
            className="borderRadiusButtonBusqueda"
          >
            Buscar
          </Button>
        </div>
      </Form.Group>
    </>
  );
}

export default ButtonBuscarPlantilla;
