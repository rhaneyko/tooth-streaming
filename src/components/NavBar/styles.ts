import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
   
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1904px;
  
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

export const Logo = styled.h1`
    color: #FFF;

`;
