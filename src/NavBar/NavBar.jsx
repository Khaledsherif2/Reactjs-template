import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="search">
          <input type="search" placeholder="Type A Keywoard" />
        </div>
        <div className="icons">
          <span className="notification">
            <i className="fa-regular fa-bell fa-lg"></i>
          </span>
          <img src="/images/avatar.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
