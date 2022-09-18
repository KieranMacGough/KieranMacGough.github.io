import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import NavbarMenu from './NavbarMenu';


interface Iprops {
}

interface IWrapper {
    navOpen: boolean;
}

function Navbar() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        navOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
    }, [navOpen])


    const handleToggle = () => {
        setNavOpen(prev => !prev);
    };

    
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        console.log(window.scrollY);
        console.log(currentScrollHeight);
        if (currentScrollHeight > window.scrollY) {
            console.log("Hide Nav")
            document.getElementById("navbar")!.style.top = "0";
        } else {
            console.log("Show Nav")
            document.getElementById("navbar")!.style.top = "-110px";
        }
        setCurrentScrollHeight(window.scrollY);
            // if (document.body.scrollHeight > 20 || document.documentElement.scrollTop < 20) {
            //     document.getElementById("navbar")!.style.top = "0";
            // } else {
            //     document.getElementById("navbar")!.style.top = "-100px";
            // }
    }
    return (
        <>
            <Container id="navbar">
                <Logo></Logo>
                <Hamburger onClick={handleToggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd" />
                    </svg>
                </Hamburger>
                <Wrapper navOpen={navOpen}>
                    <NavbarMenu />
                </Wrapper>
            </Container>
        </>
    );
}

export default Navbar;

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2em;
    position: fixed;
    top: -110px;
    z-index: 1;
    width: 100%;
    transition: all 300ms ease;
    backdrop-filter: blur(8px);
    background-color: #13262FB3;
    box-shadow: 0 1px 20px 1px darkgray;
`;

const Logo = styled.img``

const Hamburger = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 925px) {
    display: block;
    
  }
`

const Wrapper = styled.div<IWrapper>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em 0 0;
    @media screen and (max-width: 925px) {
        position: absolute;
        right: 0;
        top:0;
        display: ${props => props.navOpen ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        // makes menu span full height and width
        width: 100%;
        height: calc(100vh);
        backdrop-filter: blur(5px) saturate(80%);
        background-color: red;
  }
`