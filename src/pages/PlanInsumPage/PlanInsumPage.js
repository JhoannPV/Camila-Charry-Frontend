import BackButton from "../../components/BackButton/BackButton";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import PlantillasInsumos from "../../components/plantillas/PlantillasInsumos/PlantillasInsumos";
import "./PlanInsumPage.css";

function PlanInsumPage({ setPlantillaInsumo }) {
  const ruta = "/";
  return (
    <>
      <Header />
      <div className="encabezado-secundario">
        <div className="button-signup">
          <ButtonSignOut />
        </div>
        <div className="titulo">
          <h1>Plantillas de Insumos</h1>
        </div>
        <div className="espaciado"></div>
      </div>
      <div className="backButtonSpace">
        <BackButton ruta={ruta} />
      </div>
      <div className="plantillas-insumos">
        <PlantillasInsumos setPlanInsumo={setPlantillaInsumo} />
      </div>
    </>
  );
}

export default PlanInsumPage;
