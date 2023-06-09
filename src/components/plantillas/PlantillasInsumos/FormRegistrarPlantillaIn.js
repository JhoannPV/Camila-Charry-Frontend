import "./FormRegistrarPlantillaIn.css";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

function FormRegistrarPlantillaIn({ estado1, setEstado1 }) {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let datos = { nombre, description };
    try {
      const token = localStorage.getItem("jwt-token");
      const url = "http://localhost:3001/api/v1/plantillas-insumos";
      await axios.post(url, datos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Plantilla Registrada");
      setTimeout(() => {
        setEstado1(!estado1);
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error("Fallo:" + error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="NombrePlanIn">
          <Form.Label>Nombre de la Plantilla</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre de la plantilla"
            autoComplete="off"
            name="nombrePlanIn"
            onChange={(ev) => setNombre(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DescriptionPlanIn">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresar Descripción"
            autoComplete="off"
            name="descriptionPlanIn"
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </Form.Group>
        <div className="centrar-button">
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormRegistrarPlantillaIn;
