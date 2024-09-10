import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Files from "./Files/Files";
import Plans from "./Plans/Plans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Files" element={<Files />} />
        <Route path="/Plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
