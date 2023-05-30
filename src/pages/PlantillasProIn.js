import Footer from "../components/footer/footer";
import Header from "../components/header/header";
/* import Plantillas from "../components/plantillas/Plantillas";
 */ import Plantillas from "../components/plantillas/Plantillas";

function PlantillasProIn() {
  return (
    <>
      <Header />
      <div className="contenido">
        <Plantillas />
      </div>
      <Footer />
    </>
  );
}

export default PlantillasProIn;
