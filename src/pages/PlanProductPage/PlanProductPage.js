import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import PlantillasProductos from "../../components/plantillas/PlantillasProductos/PlantillasProductos";
import "./PlanProductPage.css";

function PlanProductPage() {
  return (
    <>
      <Header />
      <div className="encabezado-secundario">
        <div className="button-signup">
          <ButtonSignOut />
        </div>
        <div className="titulo">
          <h1>Plantillas de Productos</h1>
        </div>
        <div className="espaciado"></div>
      </div>
      <div className="plantillas-productos">
        <PlantillasProductos />
      </div>
    </>
  );
}

export default PlanProductPage;
