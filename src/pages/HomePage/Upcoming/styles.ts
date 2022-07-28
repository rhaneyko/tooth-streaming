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
    display: flex;
    flex-direction: row;

    width: 400px;
    height: 273px;

    margin: 10px;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0, 0.4);

    p{
        color: white;
        align-self: justify;
    }
`;

export const Content = styled.div``;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;


`;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;
`;

export const MovieTitle = styled.p``;

export const ReleaseDate = styled.p``;
