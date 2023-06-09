import "./SignUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function SignUpForm() {
  let rutaLogin = "/login";

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sexo, setSexo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let newUser = {
      nombre,
      apellido,
      sexo,
      username,
      email,
      password,
      role,
    };
    try {
      const url = "http://localhost:3001/api/v1/auth/signup";
      await axios.post(url, newUser);
      toast.success("Usuario registrado");
    } catch (error) {
      toast.error("Faltan datos, Usuario o Correo ya registrados");
    }
  };
  return (
    <>
      <div className="signUp">
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su Nombre Completo"
              autoComplete="on"
              name="nombre"
              onChange={(ev) => setNombre(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese sus Apellidos"
              autoComplete="on"
              name="apellido"
              onChange={(ev) => setApellido(ev.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sexo</Form.Label>
            <Form.Select
              aria-label="Sexo"
              name="sexo"
              onChange={(ev) => setSexo(ev.target.value)}
            >
              <option>Seleccionar</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="nombreUsuarioMargin">
              Nombre de Usuario
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Nombre de Usuario"
              autoComplete="on"
              name="username"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <div className="password">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                required
                name="password"
                onChange={(ev) => setPassword(ev.target.value)}
                className="borderRadius"
              />
              <div
                className="visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </div>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Select
              aria-label="Rol"
              name="role"
              onChange={(ev) => setRole(ev.target.value)}
            >
              <option>Seleccionar</option>
              <option value="Administrador">Administrador</option>
              <option value="Común">Común</option>
            </Form.Select>
          </Form.Group>
          <div className="centrar-button">
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </div>
          <div className="signUpContainer">
            <Link to={rutaLogin} className="LinkLogin">
              Inicie sesión aquí
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUpForm;
