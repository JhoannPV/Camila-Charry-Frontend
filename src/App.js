import Login from "./pages/Login/Login";
import PlantillasProIn from "./pages/PlantillasProIn/PlantillasProIn";
import PlanProductPage from "./pages/PlanProductPage/PlanProductPage";
import PlanInsumPage from "./pages/PlanInsumPage/PlanInsumPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/token" />
        <Route path="/plantillas" element={<PlantillasProIn />} />
        <Route
          path="/gestionar-plantillas-de-productos"
          element={<PlanProductPage />}
        />
        <Route
          path="/gestionar-plantillas-de-insumos"
          element={<PlanInsumPage />}
        />
      </Routes>
    </>
  );
}

export default App;
