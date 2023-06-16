import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function EditarPlantilla({ estado2, setEstado2, plantillaSearch, Pro_o_In }) {
  const [nombre, setNombre] = useState(plantillaSearch.nombre);
  const [description, setDescription] = useState(plantillaSearch.description);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let datos = { nombre, description };
    if (nombre === "") {
      toast.error("El nombre no puede ser un campo vacio");
    } else {
      try {
        const token = localStorage.getItem("jwt-token");
        const url = `http://localhost:3001/api/v1/plantillas-${Pro_o_In}`;
        await axios.patch(url, datos, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Plantilla Actualizada");
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
      <h3 className="editarPlanTitle">{plantillaSearch.nombre}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="NombrePlan">
          <Form.Label>Nombre de la Plantilla</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre de la plantilla"
            autoComplete="off"
            name="nombrePlan"
            maxLength="51"
            value={nombre}
            onChange={(ev) => setNombre(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DescriptionPlan">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresar Descripción"
            autoComplete="off"
            name="descriptionPlan"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </Form.Group>
        <div className="centrar-button">
          <Button
            variant="primary"
            type="submit"
            className="registrarPlantillaSombreado"
          >
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </>
  );
}

export default EditarPlantilla;
