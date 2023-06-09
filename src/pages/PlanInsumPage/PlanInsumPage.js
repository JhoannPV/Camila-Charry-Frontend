import "./PlanInsumPage.css";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import PlantillasInsumos from "../../components/plantillas/PlantillasInsumos/PlantillasInsumos";

function PlanInsumPage() {
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
      <div className="plantillas-insumos">
        <PlantillasInsumos />
      </div>
    </>
  );
}

export default PlanInsumPage;
