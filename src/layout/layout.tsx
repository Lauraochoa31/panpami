import React from "react";

const Layout = (children: React.ReactNode) => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            Inicio
          </a>
          <nav className="header__nav">
            <button className="header__menu_button">Menu</button>
            <button className="header__location_button">Ubicacion</button>
            <button className="header__contact_button">Contactenos</button>
          </nav>
        </div>
      </header>
      {children}
      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
