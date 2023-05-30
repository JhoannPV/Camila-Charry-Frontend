import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import PlantillaProducto from "../components/plantilla_produto/PlantillaProducto";

function PlantillasProIn() {
  return (
    <>
      <Header />
      <div className="contenido">
        <PlantillaProducto />
      </div>
      <Footer />
    </>
  );
}

export default PlantillasProIn;
