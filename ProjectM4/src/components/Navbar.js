import React from "react";
import { Link } from 'react-router-dom';
import { NavbarWrapper } from "../styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <Link to="/">
				Inicio
			</Link>
      <Link to="/Conciertos">
				Conciertos
			</Link>
      <Link to="/Teatro">
				Teatro
			</Link>
			
			<Link to="/Forma">
				Registrarse
			</Link>
     
    </NavbarWrapper>
  );
}

export default Navbar;
