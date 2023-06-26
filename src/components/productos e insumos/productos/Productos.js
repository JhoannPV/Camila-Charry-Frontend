import "./Productos.css";
import "../ProIn.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaProductos from "./ListaProductos";
import Modal from "../../Modal/Modal";
import Button from "react-bootstrap/Button";
import FormRegistrarPro from "./FormRegistrarPro";
import ButtonBuscarProIn from "../ButtonBuscarProIn";
import OpcionesDeleteProIn from "../OpcionesDeleteProIn";
import EditarProIn from "../EditarProIn";

function Productos({ plantillaProducto }) {
  const Pro_o_In = "productos/buscarPro";
  const Pro_o_In2 = "productos/eliminarPro";
  const navigate = useNavigate();
  const ruta = "/login";
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productos2, setProductos2] = useState([]);
  const [showPro, setShowPro] = useState(false);
  const [deletePro, setDeletePro] = useState([]);
  const [updatePro, setUpdatePro] = useState([]);
  const Pro_o_In3 = `productos/${updatePro.id}`;
  const plantillaProId = plantillaProducto.id;

  const token = localStorage.getItem("jwt-token");
  let data = { plantillaProId };
  if (!token) {
    navigate(ruta);
  } else {
    const getProductos = async () => {
      try {
        const url = "http://localhost:3001/api/v1/productos/forPlanPro";
        const result = await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductos(result.data.data);
      } catch (error) {
        toast.error("Fallo:" + error);
      }
    };
    getProductos();
  }

  return (
    <>
      <ToastContainer />
      <Modal
        mensaje="Registrar Producto"
        estado={estadoModal1}
        setEstado={setEstadoModal1}
        alingnItems="flex-start"
      >
        <FormRegistrarPro
          estado1={estadoModal1}
          setEstado1={setEstadoModal1}
          plantillaProducto={plantillaProId}
        />
      </Modal>
      <Modal
        mensaje="Editar Producto"
        estado={estadoModal2}
        setEstado={setEstadoModal2}
        alingnItems="flex-start"
      >
        <EditarProIn
          Pro_o_In={Pro_o_In3}
          estado2={estadoModal2}
          setEstado2={setEstadoModal2}
          proinSearch={updatePro}
          ProIn={"Producto"}
        />
      </Modal>
      <Modal
        mensaje="Eliminar Producto"
        estado={estadoModal3}
        setEstado={setEstadoModal3}
        alingnItems="center"
      >
        <OpcionesDeleteProIn
          Pro_o_In={Pro_o_In2}
          setEstadoModal3={setEstadoModal3}
          deleteProIn={deletePro}
          ProIn={"Producto"}
          PlantillaProIn={plantillaProId}
        />
      </Modal>
      <div className="crear-buscar-Pro_o_In">
        <div className="crear-Pro_o_In">
          <Button
            variant="success"
            onClick={() => setEstadoModal1(!estadoModal1)}
            className="ButtonAgregar"
          >
            Agregar Plantilla
          </Button>
        </div>
        <div className="buscar-Pro_o_In">
          <ButtonBuscarProIn
            Pro_o_In={Pro_o_In}
            setProIn={setProductos2}
            setShowProIn={setShowPro}
            ProIn={"Producto"}
            PlantillaProIn={plantillaProId}
          />
        </div>
        <div className="espaciado"></div>
      </div>
      {showPro === true && productos2 ? (
        <div className="contenido-Pro">
          <div className="format-mas-button">
            <div>
              <Button
                variant="danger"
                className="mostrarAllPro"
                onClick={() => setShowPro(false)}
              >
                Mostrar todas las Plantillas
              </Button>
            </div>
            <ul className="lista-productos">
              {productos2.map((producto) => {
                return (
                  <>
                    <ListaProductos
                      producto={producto}
                      estado2={estadoModal2}
                      setEstado2={setEstadoModal2}
                      estado3={estadoModal3}
                      setEstado3={setEstadoModal3}
                      setDeletePro={setDeletePro}
                      setUpdatePro={setUpdatePro}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="contenido-Pro">
          <ul className="lista-productos">
            {productos.map((producto) => {
              return (
                <>
                  <ListaProductos
                    producto={producto}
                    estado2={estadoModal2}
                    setEstado2={setEstadoModal2}
                    estado3={estadoModal3}
                    setEstado3={setEstadoModal3}
                    setDeletePro={setDeletePro}
                    setUpdatePro={setUpdatePro}
                  />
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Productos;
