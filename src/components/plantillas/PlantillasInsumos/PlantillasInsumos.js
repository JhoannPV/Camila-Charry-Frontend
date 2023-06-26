import "./PlantillasInsumos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaPlantillasInsumos from "./ListaPlantillasInsumos";
import Modal from "../../Modal/Modal";
import Button from "react-bootstrap/Button";
import FormRegistrarPlantillaIn from "./FormRegistrarPlantillaIn";
import ButtonBuscarPlantilla from "../ButtonBuscarPlantilla";
import OpcionesDeletePlantilla from "../OpcionesDeletePlantilla";
import EditarPlantilla from "../EditarPlantilla";

function PlantillasInsumos({ setPlanInsumo }) {
  const Pro_o_In = "insumos/buscarPlanIn";
  const Pro_o_In2 = "insumos/eliminarPlanIn";
  const navigate = useNavigate();
  const ruta = "/";
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [plantillasInsumos, setPlantillasInsumos] = useState([]);
  const [plantillasInsumos2, setPlantillasInsumos2] = useState([]);
  const [showPlantillas, setShowPlantillas] = useState(false);
  const [deletePlantilla, setDeletePlantilla] = useState([]);
  const [updatePlantilla, setUpdatePlantilla] = useState([]);
  const Pro_o_In3 = `insumos/${updatePlantilla.id}`;

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta);
    } else {
      const getPlantillasInsumos = async () => {
        try {
          const url = "http://localhost:3001/api/v1/plantillas-insumos";
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPlantillasInsumos(result.data.data);
        } catch (error) {
          toast.error("Fallo:" + error);
        }
      };
      getPlantillasInsumos();
    }
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <Modal
        mensaje="Registrar Plantilla de Insumo"
        estado={estadoModal1}
        setEstado={setEstadoModal1}
        alingnItems="flex-start"
      >
        <FormRegistrarPlantillaIn
          estado1={estadoModal1}
          setEstado1={setEstadoModal1}
        />
      </Modal>
      <Modal
        mensaje="Editar Plantilla"
        estado={estadoModal2}
        setEstado={setEstadoModal2}
        alingnItems="flex-start"
      >
        <EditarPlantilla
          Pro_o_In={Pro_o_In3}
          estado2={estadoModal2}
          setEstado2={setEstadoModal2}
          plantillaSearch={updatePlantilla}
        />
      </Modal>
      <Modal
        mensaje="Eliminar Plantilla"
        estado={estadoModal3}
        setEstado={setEstadoModal3}
        alingnItems="center"
      >
        <OpcionesDeletePlantilla
          Pro_o_In={Pro_o_In2}
          setEstadoModal3={setEstadoModal3}
          deletePlantilla={deletePlantilla}
          ProIn="insumos"
        />
      </Modal>
      <div className="crear-buscar-Pla-Pro_o_In">
        <div className="crear-Pla-Pro_o_In">
          <Button
            variant="success"
            onClick={() => setEstadoModal1(!estadoModal1)}
            className="ButtonAgregar"
          >
            Agregar Plantilla
          </Button>
        </div>
        <div className="buscar-Pla-Pro_o_In">
          <ButtonBuscarPlantilla
            Pro_o_In={Pro_o_In}
            setPlantillas={setPlantillasInsumos2}
            setShowPlantillas={setShowPlantillas}
          />
        </div>
        <div className="espaciado"></div>
      </div>
      {showPlantillas === true && plantillasInsumos2 ? (
        <div className="contenido-plaI">
          <div className="format-mas-button">
            <div>
              <Button
                variant="danger"
                className="mostrarAllPlantillas"
                onClick={() => setShowPlantillas(false)}
              >
                Mostrar todas las Plantillas
              </Button>
            </div>
            <ul className="lista-plantillas-insumos">
              {plantillasInsumos2.map((plantilla) => {
                return (
                  <>
                    <ListaPlantillasInsumos
                      plantilla={plantilla}
                      estado2={estadoModal2}
                      setEstado2={setEstadoModal2}
                      estado3={estadoModal3}
                      setEstado3={setEstadoModal3}
                      setDeletePlantilla={setDeletePlantilla}
                      setUpdatePlantilla={setUpdatePlantilla}
                      setPlanInsumo={setPlanInsumo}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="contenido-plaI">
          <ul className="lista-plantillas-insumos">
            {plantillasInsumos.map((plantilla) => {
              return (
                <>
                  <ListaPlantillasInsumos
                    plantilla={plantilla}
                    estado2={estadoModal2}
                    setEstado2={setEstadoModal2}
                    estado3={estadoModal3}
                    setEstado3={setEstadoModal3}
                    setDeletePlantilla={setDeletePlantilla}
                    setUpdatePlantilla={setUpdatePlantilla}
                    setPlanInsumo={setPlanInsumo}
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

export default PlantillasInsumos;
