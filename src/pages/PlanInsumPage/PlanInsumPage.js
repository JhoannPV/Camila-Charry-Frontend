import "./PlanInsumPage.css";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PlantillasInsumos from "../../components/plantillas/PlantillasInsumos/PlantillasInsumos";

function PlanInsumPage() {
  return (
    <>
      <Header />
      <ButtonSignOut />
      <div className="plantillas-insumos">
        <PlantillasInsumos />
      </div>
      <Footer />
    </>
  );
}

export default PlanInsumPage;
