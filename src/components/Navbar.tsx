import React from 'react';
import { Link } from 'react-router-dom';
import NavbarButton from '../styledComponents/buttons/NavbarButton';
import Navigation from '../styledComponents/Navigation';

function Navbar() {

  return (
    <Navigation>
      <NavbarButton className='right'><Link to="/main">Main page</Link></NavbarButton>
      <NavbarButton><Link to="/">Sign In</Link></NavbarButton>
      <NavbarButton><Link to="/signup">Sign Up</Link></NavbarButton>
    </Navigation>
  );
}

export default Navbar;
