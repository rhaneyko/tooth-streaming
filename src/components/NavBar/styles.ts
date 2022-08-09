import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  padding: 15px;
   
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1904px;

  
  @media (max-width: 768px) {
    padding-left: 10px;
  }

  /* .nav_menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav_toggler {
    display: flex;
    font-size: 20px;
  }

  .nav_toggler {
    display: flex;
  }

  .nav_menu {
    width: 300px;
    height: 929px;

    flex-direction: column;

    left: 0;
    top: 0;
      
    position: absolute;
    
    background-color: #212329;

    padding: 20px;

    border-top-right-radius: 50px;

    box-shadow: 20px 0px 20px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: 1s;
    z-index: 999;

    @media (max-width: 768px) {
      left: 0;
      width: 380px;
    }
  }

  .nav_active {
    transform: translateX(0);

    @media (max-width: 768px) {
      transform: translateX(0);
    }
  } */
`;

export const Logo = styled.h1`
    color: #FFF;
`;
