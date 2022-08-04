import { useState } from 'react';
import SideBar from '../SideBar';
import { Container, Logo } from './styles';

const NavBar = () => {
  const [active, setActive] = useState('nav_menu');

  const navToggle = () => {
    if(active === 'nav_menu') {
      setActive('nav_menu nav_active');
    }
  }

  return (
    <Container>
      <Logo>LOGO</Logo>
      <div className={active}
        
      >
        <SideBar />
      </div>
    </Container>
  );
};

export default NavBar;
