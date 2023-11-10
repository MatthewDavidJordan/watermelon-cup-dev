import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home, Teams, Schedule, Matches } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </div>
  );
}

export default App;
