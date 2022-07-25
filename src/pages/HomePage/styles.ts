import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    padding: 10px;

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
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`;

export const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    padding: 50px;

`;

export const Title = styled.h1`
    color: white;
`;
