import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 450px;
    height: 320px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
     width: 7px;
    }
    ::-webkit-scrollbar-thumb {
     background-color: #F0F0F0;
     border-radius: 5px;
    }
`;

export const Blurred = styled.div`
    display: flex;
    width: 100%;
    height: 320px;
    

    background-color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    -webkit-filter: blur(5px);
    filter: blur(5px);
`;

export const Card = styled.div`
    width: 400px;
    height: 273px;

    margin: 10px;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0, 0.4);

    `;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;
`;

