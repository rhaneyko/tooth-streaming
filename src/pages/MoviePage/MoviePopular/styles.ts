import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 800px;
    height: 400px;

    justify-content: center;
    align-items: center;

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
        display: flex;
    }
    
    .rec-dot_active {
      background-color: #0065FF !important;
      box-shadow: 0 0 1px 3px #0065FF !important;
    }
    
    .rec-dot:focus,
    .rec-dot:hover {
      box-shadow: 0 0 1px 3px #0065FF !important;
    }

    .rec-dot_active:focus,
    .rec-dot_active:hover {
      background-color: #0065FF !important;
      box-shadow: 0 0 1px 3px #0065FF !important;
    }
`;

export const Blurred = styled.div`
    display: flex;
    width: 100%;
    height: 320px;
    

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    -webkit-filter: blur(5px);
    filter: blur(5px);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    width: 700px;
    height: 300px;

    align-items: center;

    padding: 22px 30px 0 30px;

    position: absolute;
    z-index: 2;
`;

export const MovieImage = styled.img`
    width: 180px;
    height: 273px;

    border-radius: 5px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 400px;
    height: 300px;

    align-items: center;

    border-radius: 20px;
    
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0, 0.4);
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    
    width: 400px;
    height: 300px;

    padding: 5px 10px 0 10px;
    `;

export const MovieTitle = styled.h1`
    color: white;
    
    font-size: 20px;
    `;

export const ReleaseDate = styled.p`
    color: white;
    font-size: 17px;
`;

export const Overview = styled.p`
    color: white;
    font-size: 13px;

    text-align: justify;

    margin-top: 10px;
`;

export const Genres = styled.div`
   display: flex;
   position: absolute;

   margin-top: 230px;

  p {
    margin: 20px 10px 0 0;
    padding: 5px 15px;

    font-size: 12px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);

    border-radius: 11px;
  }
`;
