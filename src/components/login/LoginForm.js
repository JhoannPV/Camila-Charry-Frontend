import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function LoginForm() {
  let rutaPlan = "/";
  let rutaSigUp = "/signup";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let credentials = { username, password };
    try {
      const url = "http://localhost:3001/api/v1/auth/signin";
      const res = await axios.post(url, credentials);
      const token = res.data.data.token;
      localStorage.setItem("jwt-token", token);
      navigate(rutaPlan);
    } catch (error) {
      toast.error(
        "Usuario y/o contraseña incorrectos, o no tiene cuenta de Administrador"
      );
    }
  };
  return (
    <>
      <div className="login">
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
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
          <div className="signup">
            <p>¿No tiene cuenta?</p>
            <Link to={rutaSigUp} className="LinkSignUp">
              Registrese aquí
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
