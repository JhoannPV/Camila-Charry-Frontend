import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LoginForm from "../../components/login/LoginForm";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />
      <div>
        <h1 className="titutlo-login">Iniciar sesión</h1>
        <section className="espaciado-login">
          <LoginForm />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Login;
