import { FC, useState, useEffect, useRef, Ref } from 'react';
import styled from 'styled-components';
import NavbarMenu from './NavbarMenu';


interface Iprops {
}

interface IWrapper {
    navOpen: boolean;
}

function useOutsideAlerter(ref: any, handleToggle: any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && ref.current == event.target) {
                handleToggle();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function Navbar() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    
    useEffect(() => {
        if (navOpen) {
            let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
            let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(LeftScroll, TopScroll);
            }
        } else {
            window.onscroll = function () { scrollFunction() };
        }
    }, [navOpen])

    const handleToggle = () => {
        setNavOpen(prev => !prev);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, handleToggle);



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
    }

    return (
        <>
            <Container id="navbar" >
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

            </Container>
            <Wrapper navOpen={navOpen} ref={wrapperRef} >
                    <NavbarMenu handleToggle={handleToggle} />
                </Wrapper>
        </>
    );
}

export default Navbar;

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2em;
    position: fixed;
    top: 0;
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
        position: fixed;
        right: 0;
        top:0;
        display: ${props => props.navOpen ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        // makes menu span full height and width
        width: 100%;
        height: calc(100vh);
        backdrop-filter: blur(8px);
        background-color: #13262FB3;
        z-index: 1;
        &:before {
            backdrop-filter: blur(px);
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0; 
        }
  }
`