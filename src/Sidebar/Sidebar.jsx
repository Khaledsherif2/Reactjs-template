import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <h3>Yoru</h3>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-regular fa-chart-bar fa-fw"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-gear fa-fw"></i>
              <span>Setting</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-regular fa-user fa-fw"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-diagram-project fa-fw"></i>
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Courses"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-graduation-cap fa-fw"></i>
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Friends"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-regular fa-circle-user fa-fw"></i>
              <span>Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Files"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-regular fa-file fa-fw"></i>
              <span>Files</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Plans"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-regular fa-credit-card fa-fw"></i>
              <span>Plans</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
