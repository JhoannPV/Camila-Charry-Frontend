import "./FormRegistrarPro.css";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

function FormRegistrarPro({ estado1, setEstado1, plantillaProducto }) {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let datos = {
      nombre,
      description,
      color,
      precioUnitario,
      cantidad,
      plantillaProducto,
    };
    try {
      const token = localStorage.getItem("jwt-token");
      const url = "http://localhost:3001/api/v1/productos";
      const res = await axios.post(url, datos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.data === null) {
        toast.error("El producto que desea agregar ya esta registrado");
      } else {
        toast.success("Producto Registrado");
        setTimeout(() => {
          setEstado1(!estado1);
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      toast.error("Fallo: " + error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="NombrePro">
          <Form.Label>Nombre de la Plantilla</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre del producto"
            autoComplete="off"
            name="nombrePro"
            maxLength="51"
            onChange={(ev) => setNombre(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ColorPro">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="color"
            autoComplete="off"
            name="ColorPro"
            onChange={(ev) => setColor(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioUniPro">
          <Form.Label>Precio Unitario</Form.Label>
          <Form.Control
            type="number"
            autoComplete="off"
            name="precioUniPro"
            min="0"
            onChange={(ev) => setPrecioUnitario(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CantidadPro">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            autoComplete="off"
            name="CantidadPro"
            min="0"
            onChange={(ev) => setCantidad(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DescriptionPro">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresar Descripción"
            autoComplete="off"
            name="descriptionPro"
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </Form.Group>
        <div className="centrar-button">
          <Button
            variant="primary"
            type="submit"
            className="registrarProductoSombreado"
          >
            Agregar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormRegistrarPro;
