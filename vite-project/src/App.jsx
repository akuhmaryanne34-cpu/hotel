import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import RoomDetails from "./pages/RoomDetails";
import ScopeAI from "./components/ai/ScopeAI";
import Gallery from "./pages/gallerys/Gallery";
import About from "./pages/about/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>

      <ScopeAI />
    </>
  );
}

export default App;
