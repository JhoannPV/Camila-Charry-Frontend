import "./PlantillasProductos.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListaPlantillasProductos from "./ListaPlantillasProductos";
import Modal from "../../Modal/Modal";
import Button from "react-bootstrap/Button";
import FormRegistrarPlantillaPro from "./FormRegistrarPlantillaPro";

function PlantillasProductos() {
  const navigate = useNavigate();
  const ruta = "/";
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [plantillasProductos, setPlantillasProductos] = useState([]);

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
      >
        <FormRegistrarPlantillaPro
          estado1={estadoModal1}
          setEstado1={setEstadoModal1}
        />
      </Modal>
      <Modal
        mensaje="Editar"
        estado={estadoModal2}
        setEstado={setEstadoModal2}
      ></Modal>
      <Modal
        mensaje="Eliminar"
        estado={estadoModal3}
        setEstado={setEstadoModal3}
      ></Modal>
      <Button
        variant="success"
        onClick={() => setEstadoModal1(!estadoModal1)}
        className="ButtonAgregar"
      >
        Agregar Plantilla
      </Button>
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
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PlantillasProductos;
