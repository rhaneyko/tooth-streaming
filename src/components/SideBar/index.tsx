import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {
    Container,
    HeaderSideBar,
    Title
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
            className="close"
            color="#210124"
            onClick={closeSideBar}
          />
         </HeaderSideBar>
            <Title>Side Bar</Title>
        </Container>
    )
}

export default SideBar;
