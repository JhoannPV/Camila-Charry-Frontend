import { Link } from "react-router-dom";

function GestionarPlantillas({ menuplantilla }) {
  let ruta;
  if (menuplantilla === 1) {
    ruta = "/gestionar-plantillas-de-productos";
  } else if (menuplantilla === 2) {
    ruta = "/gestionar-plantillas-de-insumos";
  }
  return (
    <>
      <button type="button" className="buttonGPlant">
        <Link to={ruta} className="gestionarPlantillasLink">
          Gestionar Plantillas
        </Link>
      </button>
    </>
  );
}

export default GestionarPlantillas;
