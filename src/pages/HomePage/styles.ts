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
`;

export const ScrollMovies = styled.div`
    padding: 20px;
`;
