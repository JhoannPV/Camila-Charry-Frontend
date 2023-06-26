import "./ProductoPage.css";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import BackButton from "../../components/BackButton/BackButton";
import Productos from "../../components/productos e insumos/productos/Productos";

function ProductoPage() {
  const plantillaPro = localStorage.getItem("plantillaProducto");
  const plantillaProducto = JSON.parse(plantillaPro);
  const ruta = "/gestionar-plantillas-de-productos";
  return (
    <>
      <Header />
      <div className="encabezado-secundario">
        <div className="button-signup">
          <ButtonSignOut />
        </div>
        <div className="titulo">
          <h1>{plantillaProducto.nombre}</h1>
        </div>
        <div className="espaciado"></div>
      </div>
      <BackButton ruta={ruta} />
      <div className="productos">
        <Productos plantillaProducto={plantillaProducto} />
      </div>
    </>
  );
}

export default ProductoPage;
