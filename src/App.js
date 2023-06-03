import Login from "./pages/Login/Login";
import PlantillasProIn from "./pages/PlantillasProIn/PlantillasProIn";
import PlanProductPage from "./pages/PlanProductPage/PlanProductPage";
import PlanInsumPage from "./pages/PlanInsumPage/PlanInsumPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlantillasProIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
