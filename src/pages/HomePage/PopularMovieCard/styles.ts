import styled from 'styled-components';
const poster = 'https://image.tmdb.org/t/p/w500';

export const Container = styled.div`
    display: flex;

    width: 800px;

    .rec.rec-arrow {
      border-radius: 50px;
      border: #212329 solid 1px;
      background-color: #212329;
      color: #FFF;
    }

    .rec.rec-arrow:hover {
      border-radius: 50%;
    }

    .rec.rec-arrow:disabled {
      visibility: hidden;
    }

    .rec-carousel-item:focus {
      outline: none;
      
    }

    button.rec-dot{
        display: none;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;

    width: 800px;
    height: 273px;

    align-items: center;
`;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;

    border-radius: 15px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 500px;
    height: 200px;

    padding: 5px 0 0 20px;
`;

export const MovieTitle = styled.h1`
    color: white;

    font-size: 20px;

`;

export const ReleaseDate = styled.p`
    color: white;
    font-size: 17px;

`;

export const VoteAverage = styled.p`
    color: white;
    font-size: 17px;

`;

export const Overview = styled.p`
    color: white;
    font-size: 15px;

    margin-top: 10px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonTrailer = styled.button`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 150px;
    height: 40px;

    margin: 5px;

    border: 1px solid #212329;

    background-color: #212329;
`;

export const ButtonWatchMovie = styled.button`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 150px;
    height: 40px;

    margin: 5px;

    border: 1px solid #212329;

    background-color: #212329;
`;

export const ButtonText = styled.p`
    color: #FFF;
    font-weight: bold;
    font-size: 15px;
`;
