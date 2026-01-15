import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import navLinks from "./data/navData";
import Home from "./pages/Home";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
