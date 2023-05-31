import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Plantillas from "../../components/plantillas/Plantillas";
import "./PlantillasProIn.css";

function PlantillasProIn() {
  return (
    <>
      <Header />
      <div className="contenido-plantillas">
        <Plantillas />
      </div>
      <Footer />
    </>
  );
}

export default PlantillasProIn;
