import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 700px;
    height: 350px;

    background-color: red;

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

    width: 180px;
    height: 273px;
`;

export const MoviesImage = styled.img`
    display: flex;

    width: 180px;
    height: 273px;
    border-radius: 20px;
`;

