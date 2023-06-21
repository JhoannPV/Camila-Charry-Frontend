import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PlantillasProIn from "./pages/PlantillasProIn/PlantillasProIn";
import PlanProductPage from "./pages/PlanProductPage/PlanProductPage";
import PlanInsumPage from "./pages/PlanInsumPage/PlanInsumPage";
import ProductoPage from "./pages/ProductoPage/ProductoPage";
import InsumoPage from "./pages/InsumoPage/InsumoPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [plantillaProducto, setPlantillaProducto] = useState([]);
  const [plantillaInsumo, setPlantillaInsumo] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<PlantillasProIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/gestionar-plantillas-de-productos"
          element={
            <PlanProductPage setPlantillaProducto={setPlantillaProducto} />
          }
        />
        <Route
          path="/gestionar-plantillas-de-insumos"
          element={<PlanInsumPage setPlantillaInsumo={setPlantillaInsumo} />}
        />
        <Route
          path="/gestionar-productos/:producto"
          element={<ProductoPage plantillaProducto={plantillaProducto} />}
        />
        <Route
          path="/gestionar-insumos/:insumo"
          element={<InsumoPage plantillaInsumo={plantillaInsumo} />}
        />
      </Routes>
    </>
  );
}

export default App;
