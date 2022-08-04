import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
   
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1904px;
  
  @media (max-width: 768px) {
    padding-left: 10px;
  }

  .nav_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav_toggler {
  font-size: 20px;
  display: flex;
}

  .nav_toggler {
    display: flex;
  }
  .nav_menu {
    width: 486px;
    height: 929px;

    flex-direction: column;

    right: 0;
    top: 0;
      
    position: absolute;
    
    background-color: #210124;

    transform: translateX(100%);
    transition: 0.5s;
    z-index: 999;

    @media (max-width: 768px) {
      right: 0;
      width: 380px;
    }
  }
  .nav_active {
    transform: translateX(0);

    @media (max-width: 768px) {
      transform: translateX(0);
    }
  }
`;

export const Logo = styled.h1`
    color: #FFF;

`;
