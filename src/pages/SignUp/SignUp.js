import "./SignUp.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SignUpForm from "../../components/signup/SignUpForm";

function SignUp() {
  return (
    <>
      <Header />
      <div>
        <h1 className="titutlo-signup">Registrese</h1>
        <section className="espaciado-signup">
          <SignUpForm />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
