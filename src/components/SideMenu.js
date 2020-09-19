import React, {useState} from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
    height: 100%;                               /* 100% Full-height */
    width: ${p => p.isOpen ? '250' : '0' }px;   /* 0 width - change this with JavaScript */
    position: fixed;                            /* Stay in place */
    z-index: 1;                                 /* Stay on top */
    top: 0;                                     /* Stay at the top */
    left: 0;
    background-color: #111;                     /* Black*/
    overflow: hidden;                         /* Disable horizontal scroll */
    padding-top: 60px;                          /* Place content 60px from the top */
    transition: 0.5s;                           /* 0.5 second transition effect to slide in the sidenav */
`;
const MenuIcon = styled.div`
    display: inline-block;
    margin: 5px 5px 5px 10px;
    padding: 5px;
    cursor: pointer;
`;
const CloseIcon = styled.div`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: #818181;
    &:hover {
        cursor:pointer;
        color: #f1f1f1;
    }
`;
const ItemContainer = styled.ul`
    margin: 20px 0px;
    padding: 0 0 0 25px;
    height:85%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: grey white;
`;
const MenuItems = styled.li`
    padding: 8px 10px;
    list-style: none;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    color: #818181;
    transition: 0.3s;
    
    &:hover {
        cursor:pointer;
        color: #f1f1f1;
    }
`;

const SideBar = (props) => {
    const [sidebarState, toggleSideBar] = useState(false);

    function handleToggle(props){
        toggleSideBar(!sidebarState);
    }

    return(
        <React.Fragment>
            <MenuIcon onClick = { () => handleToggle() }>&#9776;</MenuIcon>
            <SideBarContainer 
                isOpen={ sidebarState }
            >
                <CloseIcon onClick = { () => handleToggle() }>&times;</CloseIcon>
                <ItemContainer>
                    <MenuItems>Home</MenuItems>
                    <MenuItems>Product</MenuItems>
                    <MenuItems>Services</MenuItems>
                    <MenuItems>Contact us</MenuItems>
                    <MenuItems>Settings</MenuItems>
                    <MenuItems>Home</MenuItems>
                    <MenuItems>Product</MenuItems>
                    <MenuItems>Services</MenuItems>
                    <MenuItems>Contact us</MenuItems>
                    <MenuItems>Settings</MenuItems>
                    <MenuItems>Product</MenuItems>
                    <MenuItems>Services</MenuItems>
                    <MenuItems>Contact us</MenuItems>
                    <MenuItems>Settings</MenuItems>
                </ItemContainer>
            </SideBarContainer>
        </React.Fragment>    
    );
};

export default SideBar;