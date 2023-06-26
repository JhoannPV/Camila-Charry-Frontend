import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./ProIn.css";

function ButtonBuscarProIn({
  Pro_o_In,
  setProIn,
  setShowProIn,
  ProIn,
  PlantillaProIn,
}) {
  const [nombre, setNombre] = useState([]);

  const token = localStorage.getItem("jwt-token");
  let data = { nombre, PlantillaProIn };

  const handleClick = async () => {
    try {
      let data2 = data;
      if (data2.nombre.length !== 0) {
        const url = `http://localhost:3001/api/v1/${Pro_o_In}`;
        const res = await axios.post(url, data2, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.data === null) {
          toast.error(`${ProIn} no encontrado`);
        } else {
          setProIn(res.data.data);
          setShowProIn(true);
        }
      }
    } catch (error) {
      toast.error("Fallo: " + error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Form.Group className="mb-3 widthButtonBuscarProIn">
        <div className="buttonBusqueda">
          <Form.Control
            type="search"
            placeholder={`Buscar ${ProIn}`}
            aria-label={`Buscar ${ProIn}`}
            aria-describedby={`button-buscar-${ProIn}`}
            className="borderRadiusBusqueda"
            onChange={(ev) => setNombre(ev.target.value)}
          />
          <Button
            variant="primary"
            id={`button-buscar-${ProIn}`}
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

export default ButtonBuscarProIn;
