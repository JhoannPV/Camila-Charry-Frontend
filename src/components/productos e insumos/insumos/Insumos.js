import "./Insumos.css";
import "../ProIn.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaInsumos from "./ListaInsumos";
import Modal from "../../Modal/Modal";
import Button from "react-bootstrap/Button";
import FormRegistrarIn from "./FormRegistrarIn";
import ButtonBuscarProIn from "../ButtonBuscarProIn";
import OpcionesDeleteProIn from "../OpcionesDeleteProIn";
import EditarProIn from "../EditarProIn";

function Insumos({ plantillaInsumo }) {
  const Pro_o_In = "insumos/buscarIn";
  const Pro_o_In2 = "insumos/eliminarIn";
  const navigate = useNavigate();
  const ruta = "/login";
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [insumos, setInsumos] = useState([]);
  const [insumos2, setInsumos2] = useState([]);
  const [showIn, setShowIn] = useState(false);
  const [deleteIn, setDeleteIn] = useState([]);
  const [updateIn, setUpdateIn] = useState([]);
  const Pro_o_In3 = `insumos/${updateIn.id}`;
  const plantillaInId = plantillaInsumo.id;

  const token = localStorage.getItem("jwt-token");
  let data = { plantillaInId };
  if (!token) {
    navigate(ruta);
  } else {
    const getInsumos = async () => {
      try {
        const url = "http://localhost:3001/api/v1/insumos/forPlanIn";
        const result = await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInsumos(result.data.data);
      } catch (error) {
        toast.error("Fallo:" + error);
      }
    };
    getInsumos();
  }

  return (
    <>
      <ToastContainer />
      <Modal
        mensaje="Registrar Insumo"
        estado={estadoModal1}
        setEstado={setEstadoModal1}
        alingnItems="flex-start"
      >
        <FormRegistrarIn
          estado1={estadoModal1}
          setEstado1={setEstadoModal1}
          plantillaInsumo={plantillaInId}
        />
      </Modal>
      <Modal
        mensaje="Editar Insumo"
        estado={estadoModal2}
        setEstado={setEstadoModal2}
        alingnItems="flex-start"
      >
        <EditarProIn
          Pro_o_In={Pro_o_In3}
          estado2={estadoModal2}
          setEstado2={setEstadoModal2}
          proinSearch={updateIn}
          ProIn={"Insumo"}
        />
      </Modal>
      <Modal
        mensaje="Eliminar Insumo"
        estado={estadoModal3}
        setEstado={setEstadoModal3}
        alingnItems="center"
      >
        <OpcionesDeleteProIn
          Pro_o_In={Pro_o_In2}
          setEstadoModal3={setEstadoModal3}
          deleteProIn={deleteIn}
          ProIn={"Insumo"}
          PlantillaProIn={plantillaInId}
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
            setProIn={setInsumos2}
            setShowProIn={setShowIn}
            ProIn={"Insumo"}
            PlantillaProIn={plantillaInId}
          />
        </div>
        <div className="espaciado"></div>
      </div>
      {showIn === true && insumos2 ? (
        <div className="contenido-In">
          <div className="format-mas-button">
            <div>
              <Button
                variant="danger"
                className="mostrarAllIn"
                onClick={() => setShowIn(false)}
              >
                Mostrar todas las Plantillas
              </Button>
            </div>
            <ul className="lista-insumos">
              {insumos2.map((insumo) => {
                return (
                  <>
                    <ListaInsumos
                      insumo={insumo}
                      estado2={estadoModal2}
                      setEstado2={setEstadoModal2}
                      estado3={estadoModal3}
                      setEstado3={setEstadoModal3}
                      setDeleteIn={setDeleteIn}
                      setUpdateIn={setUpdateIn}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="contenido-In">
          <ul className="lista-insumos">
            {insumos.map((insumo) => {
              return (
                <>
                  <ListaInsumos
                    insumo={insumo}
                    estado2={estadoModal2}
                    setEstado2={setEstadoModal2}
                    estado3={estadoModal3}
                    setEstado3={setEstadoModal3}
                    setDeleteIn={setDeleteIn}
                    setUpdateIn={setUpdateIn}
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

export default Insumos;
