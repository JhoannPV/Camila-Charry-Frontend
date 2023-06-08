import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PlantillasProductos from "../../components/plantillas/PlantillasProductos/PlantillasProductos";
import "./PlanProductPage.css";

function PlanProductPage() {
  return (
    <>
      <Header />
      <ButtonSignOut />
      <div className="plantillas-productos">
        <PlantillasProductos />
      </div>
      <Footer />
    </>
  );
}

export default PlanProductPage;
