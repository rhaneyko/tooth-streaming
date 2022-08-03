import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    width: 100%;
    height: 100vh;

    padding-top: 20px;
`;

export const SideLeft = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 430px;

    background-color: white;
`;

export const SideCenter = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
    width: 950px;

    margin: 0 20px 0 20px;
`;

export const SideRight = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 750px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 26px;
`;

export const PopularMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 550px;
`;

export const ScrollMovies = styled.div`
    padding: 20px;
`;

export const UpcomingContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 800px;

    align-items: center;
`;

export const TopRatedContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

`;

export const TopRatedContainerSeries = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

`;

export const PopularSeriesContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 450px;
`;
