import "./ProductoPage.css";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";

function ProductoPage({ plantillaProducto }) {
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
      <div className="productos"></div>
    </>
  );
}

export default ProductoPage;
