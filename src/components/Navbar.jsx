const Nav = ({ handleShow }) => {
  return (
    <header className="nav-box">
      <div className="left">
        <Logo bg="#08888f" color="#08888f" className="main-logo" />
      </div>
      <nav className="right">
        <div className="links">
          <div className="menu-item">
            <p>
              <a href="#">Home</a>
            </p>
          </div>
          <div className="menu-item align-elements" onClick={handleShow}>
            <p>
              <a href="#">Products</a>
            </p>
            <ArrowDownward className="arrow-down" />
          </div>
          <div className="menu-item">
            <p>
              <a href="#">SignUp</a>
            </p>
          </div>
          <div className="menu-item">
            <p>
              <a href="#">Login</a>
            </p>
          </div>
          <MenuIcon className="menu-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
