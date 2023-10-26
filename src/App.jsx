import "./App.css";
import SignUp from "./SignUp";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Police from "./Pages/Police";
import Fire from "./Pages/Fire";
import Hospital from "./Pages/Hospital";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/police" element={<Police />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </>
  );
}

export default App;
