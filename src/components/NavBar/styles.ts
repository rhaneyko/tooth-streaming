import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 1400px 10px 50px;
  
   
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1904px;
  
  @media (max-width: 768px) {
    padding-left: 10px;
    }

  a{
    display: flex;
    height: 100%;
    align-items: center;
    font-family: 'Allerta Stencil', sans-serif;
     
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #FFF;

    padding: 0 1rem;
  
    cursor: pointer;

    }

  .nav_menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

  .nav_toggler {
    display: none;

    font-size: 20px;
    }

  @media screen and (max-width: 768px) {

    .nav_toggler {
    display: block;
  }
  .nav_menu {
    width: 50%;
    height: 50vh;
    flex-direction: column;
    left: 45vh;
    top: 8vh;
      
    position: absolute;
    border: 1px solid;
  
    
    background-color: ${props => props.theme.colors.navBackground};
    transform: translateX(100%);
    transition: 0.5s;
    z-index: 999;
    @media (max-width: 768px) {
      width: 100%;
      left: 0;
    }
  }
}

.nav_active {
  transform: translateX(0%);
}
`;

export const Logo = styled.h1`
    color: #FFF;
    margin-left: 40px;

`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #FFF;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);

    font-size: 1.8rem;
    cursor: pointer;
}
`;

