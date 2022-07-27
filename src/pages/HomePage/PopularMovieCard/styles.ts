import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

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
     
    
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 273px;

    background-color: #1a1a1a;
    `;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;
`;

export const Info = styled.div`
    width: 318px;
    height: 273px;

    margin-top: -276px;
    margin-left: 182px;
`;

export const MovieTitle = styled.h1`
    color: white;

    font-size: 20px;
    
`;

