import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import Fotos from './Fotos';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <img src={Fotos.img5} className='loguito'/>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;