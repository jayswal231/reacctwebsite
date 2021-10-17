import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink  exact className="navbar-brand" to="/">BlueSky</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        <NavLink activeClassName='menu_active' exact className="nav-link active" to="service">Service</NavLink>
                        <NavLink activeClassName='menu_active' exact className="nav-link active" to="contact">Contact</NavLink>
                        <NavLink activeClassName='menu_active' exact className="nav-link active" to="about">About</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
           </div>
          </div>
        </div>

        </>
    )
};
export default Navbar;