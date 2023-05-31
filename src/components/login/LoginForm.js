import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const navigate = useNavigate();
  let ruta = "/plantillas";
  function handleClick() {
    navigate(ruta);
  }
  return (
    <>
      <div className="login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre se Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre de Usuario" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <div className="centrar-button">
            <Button variant="primary" type="submit" onClick={handleClick}>
              SignIn
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
