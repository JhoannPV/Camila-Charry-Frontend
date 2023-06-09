import "./PlantillasProductos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaPlantillasProductos from "./ListaPlantillasProductos";
import Modal from "../../Modal/Modal";
import Button from "react-bootstrap/Button";
import FormRegistrarPlantillaPro from "./FormRegistrarPlantillaPro";
import ButtonBuscarPlantilla from "../ButtonBuscarPlantilla";
import OpcionesDeletePlantilla from "../OpcionesDeletePlantilla";
import EditarPlantilla from "../EditarPlantilla";

function PlantillasProductos({ setPlanProducto }) {
  const Pro_o_In = "productos/buscarPlanPro";
  const Pro_o_In2 = "productos/eliminarPlanPro";
  const navigate = useNavigate();
  const ruta = "/";
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [plantillasProductos, setPlantillasProductos] = useState([]);
  const [plantillasProductos2, setPlantillasProductos2] = useState([]);
  const [showPlantillas, setShowPlantillas] = useState(false);
  const [deletePlantilla, setDeletePlantilla] = useState([]);
  const [updatePlantilla, setUpdatePlantilla] = useState([]);
  const Pro_o_In3 = `productos/${updatePlantilla.id}`;

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      navigate(ruta);
    } else {
      const getPlantillasProductos = async () => {
        try {
          const url = "http://localhost:3001/api/v1/plantillas-productos";
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPlantillasProductos(result.data.data);
        } catch (error) {
          toast.error("Fallo:" + error);
        }
      };
      getPlantillasProductos();
    }
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <Modal
        mensaje="Registrar Plantilla de Producto"
        estado={estadoModal1}
        setEstado={setEstadoModal1}
        alingnItems="flex-start"
      >
        <FormRegistrarPlantillaPro
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
          ProIn="productos"
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
            setPlantillas={setPlantillasProductos2}
            setShowPlantillas={setShowPlantillas}
          />
        </div>
        <div className="espaciado"></div>
      </div>
      {showPlantillas === true && plantillasProductos2 ? (
        <div className="contenido-plaP">
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
            <ul className="lista-plantillas-productos">
              {plantillasProductos2.map((plantilla) => {
                return (
                  <>
                    <ListaPlantillasProductos
                      plantilla={plantilla}
                      estado2={estadoModal2}
                      setEstado2={setEstadoModal2}
                      estado3={estadoModal3}
                      setEstado3={setEstadoModal3}
                      setDeletePlantilla={setDeletePlantilla}
                      setUpdatePlantilla={setUpdatePlantilla}
                      setPlanProducto={setPlanProducto}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="contenido-plaP">
          <ul className="lista-plantillas-productos">
            {plantillasProductos.map((plantilla) => {
              return (
                <>
                  <ListaPlantillasProductos
                    plantilla={plantilla}
                    estado2={estadoModal2}
                    setEstado2={setEstadoModal2}
                    estado3={estadoModal3}
                    setEstado3={setEstadoModal3}
                    setDeletePlantilla={setDeletePlantilla}
                    setUpdatePlantilla={setUpdatePlantilla}
                    setPlanProducto={setPlanProducto}
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

export default PlantillasProductos;
