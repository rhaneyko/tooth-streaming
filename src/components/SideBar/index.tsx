import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import {
    Container,
    HeaderSideBar,
    Title,
} from './styles';


type Props = {
    closeSideBar: () => void;
  }
    

const SideBar: React.FC<Props> = ({closeSideBar}) => {
    return (
        <Container>
         <HeaderSideBar>
            <AiOutlineClose
              size={30}
              color='#FFF'
              onClick={closeSideBar}
            />
            <Title>Side Bar</Title>
         </HeaderSideBar>
        </Container>
    )
}

export default SideBar;
