import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./ProIn.css";

function EditarProIn({ estado2, setEstado2, proinSearch, Pro_o_In, ProIn }) {
  const [nombre, setNombre] = useState(proinSearch.nombre);
  const [description, setDescription] = useState(proinSearch.description);
  const [color, setColor] = useState(proinSearch.color);
  const [precioUnitario, setPrecioUnitario] = useState(
    proinSearch.precioUnitario
  );
  const [cantidad, setCantidad] = useState(proinSearch.cantidad);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let datos = { nombre, description, color, precioUnitario, cantidad };
    if (nombre === "") {
      toast.error("El nombre no puede ser un campo vacio");
    } else {
      try {
        const token = localStorage.getItem("jwt-token");
        const url = `http://localhost:3001/api/v1/${Pro_o_In}`;
        await axios.patch(url, datos, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success(`${ProIn} Actualizado`);
        setTimeout(() => {
          setEstado2(!estado2);
          window.location.reload();
        }, 1500);
      } catch (error) {
        toast.error("Fallo: " + error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <h3 className="editarProInTitle">{proinSearch.nombre}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="NombreProIn">
          <Form.Label>Nombre de la Plantilla</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Ingresar nombre del ${ProIn}`}
            autoComplete="off"
            name="nombreProIn"
            maxLength="51"
            value={nombre}
            onChange={(ev) => setNombre(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ColorProIn">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="color"
            autoComplete="off"
            name="ColorProIn"
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioUniProIn">
          <Form.Label>Precio Unitario</Form.Label>
          <Form.Control
            type="number"
            autoComplete="off"
            name="precioUniProIn"
            min="0"
            value={precioUnitario}
            onChange={(ev) => setPrecioUnitario(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CantidadProIn">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            autoComplete="off"
            name="CantidadProIn"
            min="0"
            value={cantidad}
            onChange={(ev) => setCantidad(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DescriptionProIn">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresar Descripción"
            autoComplete="off"
            name="descriptionProIn"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </Form.Group>
        <div className="centrar-button">
          <Button
            variant="primary"
            type="submit"
            className="registrarProInSombreado"
          >
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </>
  );
}

export default EditarProIn;
