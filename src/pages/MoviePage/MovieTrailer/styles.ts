import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    height: 100%;

    padding: 10px;

    background-color: red;

    &::-webkit-scrollbar {
     width: 7px;
    }
    ::-webkit-scrollbar-thumb {
     background-color: #F0F0F0;
     border-radius: 5px;
    }
`;

export const NoTrailer = styled.p``;

export const Player = styled.div`
    display: flex;
    background-color: white;

    width: 400px;
    height: 200px;

    background-color: #FFF;
`;
