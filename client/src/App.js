import "./App.css";
import Home from "./components/Home/Home";
import Memory from "./components/Memory/Memory";
import Gallery from "./components/Gallery/Gallery";
import BucketList from "./components/BucketList";
import BudgetTracker from "./components/BudgetTracker";
import Movie from "./components/Movie/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="memory" element={<Memory />} />
          <Route path="budgettracker" element={<BudgetTracker />} />
          <Route path="bucketlist" element={<BucketList />} />
          <Route path="movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
