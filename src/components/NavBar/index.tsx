import { useState } from 'react';

import SideBar from '../SideBar';

import { 
    Container, 
    Logo,
} from './styles';

import { FaBars } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [active, setActive] = useState('nav_menu');
  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active');
    }
  };

  const closeSide = () => {
    setActive('nav_menu');
  };

  return (
    <Container>
      <FaBars onClick={navToggle} color='#FFF'/>
      <Logo>LOGO</Logo>
      <div className={active}>
        <SideBar 
          closeSideBar={closeSide}
        />
      </div>
    </Container>
  );
};

export default NavBar;
