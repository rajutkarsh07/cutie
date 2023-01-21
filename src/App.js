import "./App.css";
import Home from "./components/Home/Home";
import Memory from "./components/Memory/Memory";
import Gallery from "./components/Gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="memory" element={<Memory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
