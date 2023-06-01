import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoginForm() {
  let mensajeAviso;
  let ruta = "/plantillas";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login(username, password) {
    if (username === "Jhoann" && password === "root") {
      mensajeAviso = "Usuario Autenticado";
      toast.done(mensajeAviso);
      navigate(ruta);
    } else {
      if (username !== "Jhoann") {
        mensajeAviso = "Usuario no registrado";
      } else if (username === "Jhoann" && password !== "root") {
        mensajeAviso = "Contraseña incorrecta";
      }
      toast.error(mensajeAviso);
    }
  }

  return (
    <>
      <div className="login">
        <ToastContainer />
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            login(username, password);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Nombre de Usuario"
              required
              autoComplete="off"
              name="username"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Form.Group>
          <div className="centrar-button">
            <Button variant="primary" type="submit">
              SignIn
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
