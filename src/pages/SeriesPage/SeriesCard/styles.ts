import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   grid: 270px / 180px 180px 180px 180px;
   grid-gap: 20px;

    @media screen and (max-width: 768px) {
        display: grid;
        grid: 280px / 180px 180px 180px;
        grid-gap: 20px;

        align-items: center;
        justify-content: center;
        }

    @media screen and (max-width: 425px) {
        display: grid;
        grid: 270px / auto auto;
        grid-gap: 10px;
        }

    @media screen and (max-width: 375px) {
        display: grid;
        grid: 270px / auto auto;
        grid-gap: 10px;
        }
`;

export const Card = styled.div`
    width: 180px;
    height: 273px;
    `;

export const SeriesImage = styled.img`
    width: 180px;
    height: 273px;
`;

