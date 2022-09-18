import React, { FC } from 'react';
import styled from 'styled-components';
import NavbarMenuItem from './NavbarMenuItem';



function NavbarMenu() {
  return (
    <MenuItems>
      <NavbarMenuItem id='1' text="About Me" onClick={() => {const anchor = document.querySelector('#aboutme') as HTMLDivElement; anchor.scrollIntoView({behavior: "smooth"})}}/>
      <NavbarMenuItem id="2" text="Projects" onClick={() => {const anchor = document.querySelector('#projects') as HTMLDivElement; anchor.scrollIntoView({behavior: "smooth"})}}/>
      <NavbarMenuItem id="3" text="Experience" onClick={() => {const anchor = document.querySelector('#experience') as HTMLDivElement; anchor.scrollIntoView({behavior: "smooth"})}}/>
      <NavbarMenuItem id="4" text="Contact" onClick={() => {const anchor = document.querySelector('#contact') as HTMLDivElement; anchor.scrollIntoView({behavior: "smooth"})}}/>
      <Button id="5">Resume</Button>
    </MenuItems>
  );
}

export default NavbarMenu;

const MenuItems = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: left;
    justify-content: left;
  }
`

const Button = styled.button`
    height: 45px;
    width: 120px;
    padding: 0 10px;
    margin: 0 0 0 20px;
    opacity: 0;
    position: relative;
    animation: fade-from-top 1s forwards calc((${props => props.id} - 1) * 300ms);

    justify-content: left;
    overflow: visible;
    @media screen and (max-width: 1000px) {
      margin: 20px 0 0 0;
      animation: fade-from-right 1s forwards calc((${props => props.id} - 1) * 300ms);
    }
`;