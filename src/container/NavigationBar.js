import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideMenu';
const HeaderContainer = styled.div`
  display: flex;
  opacity: 1; 
  background-color: #a8a2a24d; 
`; 

const  NavigationBar = () => {
    return(
      <HeaderContainer>
          <SideBar/>
      </HeaderContainer>
    );
};

export default NavigationBar;

