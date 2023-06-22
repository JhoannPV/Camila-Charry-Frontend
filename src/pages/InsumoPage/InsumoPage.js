import "./InsumoPage.css";
import ButtonSignOut from "../../components/ButtonSignOut/ButtonSignOut";
import Header from "../../components/header/header";
import BackButton from "../../components/BackButton/BackButton";

function InsumoPage({ plantillaInsumo }) {
  const ruta = "/gestionar-plantillas-de-insumos";
  return (
    <>
      <Header />
      <div className="encabezado-secundario">
        <div className="button-signup">
          <ButtonSignOut />
        </div>
        <div className="titulo">
          <h1>{plantillaInsumo.nombre}</h1>
        </div>
        <div className="espaciado"></div>
      </div>
      <BackButton ruta={ruta} />
      <div className="insumos"></div>
    </>
  );
}

export default InsumoPage;
