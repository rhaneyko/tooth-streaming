import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    justify-content: center;
    
    h1{
        color: white;
    }
`;

export const PopularMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 400px;
    
    border: 1px solid #FFF;
    background-color: #212329;
`;

export const ScrollMovies = styled.div`
    padding: 20px;
`;
