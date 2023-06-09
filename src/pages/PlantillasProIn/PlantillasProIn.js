import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import Plantillas from "../../components/plantillas/Plantillas";
import "./PlantillasProIn.css";

function PlantillasProIn() {
  return (
    <>
      <Header />
      <div className="encabezado-secundario">
        <div className="button-signup">
          <ButtonSignOut />
        </div>
        <div className="titulo">
          <h1>Home</h1>
        </div>
        <div className="espaciado"></div>
      </div>
      <div className="contenido-plantillas">
        <Plantillas />
      </div>
    </>
  );
}

export default PlantillasProIn;
