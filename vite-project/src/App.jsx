import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RoomDetails from "./pages/RoomDetails";
import ScopeAI from "./components/ai/ScopeAI";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>

      <ScopeAI />
    </>
  );
}

export default App;
