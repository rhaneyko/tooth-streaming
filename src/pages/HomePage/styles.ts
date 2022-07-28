import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    width: 100%;
    height: 100vh;
    
    h1{
        color: white;
    }
`;

export const SideLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 750px;

    border:1px solid white;
`;

export const SideCenter = styled.div`
    display: flex;
    flex-direction: column;
   
    width: 48%;
    height: 750px;

    border:1px solid white;

    padding-top: 20px;
`;

export const SideRight = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 500px;
    height: 750px;
    
    border:1px solid white;
`;

export const PopularMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 450px;
`;

export const ScrollMovies = styled.div`
    padding: 20px;
`;

export const UpcomingContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 400px;

    align-items: center;
`;


