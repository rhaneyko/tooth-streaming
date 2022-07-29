import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 450px;
    height: 800px;

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
    }
`;

export const Content = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    
    align-items: center;

    width: 220px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 220px;

    padding: 10px;
`;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;
`;

export const MovieTitle = styled.p`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    
    margin-top: 10px;
`;

export const ReleaseDate = styled.p`
    color: #FFF;
    font-size: 12px;
    text-align: center;

    margin-top: 10px;
`;

export const ButtonTrailer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 30px;

    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    margin-bottom: 10px;

    color: #FFF;

    background-color: rgba(255, 255, 255, 0.2);
`;

export const ButtonText = styled.p``;
