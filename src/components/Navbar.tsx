import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavbarMenu from './NavbarMenu';
import KMLogo from '../images/KM_Logo.png';

interface IWrapper {
    navOpen: boolean;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function useOutsideAlerter(ref: any, handleToggle: any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && ref.current === event.target) {
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
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (navOpen) {
            if (height >= 925) {
                let TopScroll = window.scrollY || document.documentElement.scrollTop;
                let LeftScroll = window.scrollX || document.documentElement.scrollLeft;
                window.onscroll = function () {
                    window.scrollTo(LeftScroll, TopScroll);
                }
            } else {
                document.body.style.height = '100vh'
                document.body.style.overflowY = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.overscrollBehavior = 'contain';
            }
        } else {
            if (height >= 925) {
                window.onscroll = function () { scrollFunction() };
            } else {
                document.body.style.height = '100%'
                document.body.style.overflowY = 'unset';
                document.body.style.position = 'relative';
                document.body.style.overscrollBehavior = 'auto';
            }
        }
    }, [navOpen, height])

    const handleToggle = () => {
        setNavOpen(prev => !prev);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, handleToggle);



    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (currentScrollHeight > window.scrollY) {
            document.getElementById("navbar")!.style.top = "0";
        } else {
            document.getElementById("navbar")!.style.top = "-110px";
        }
        setCurrentScrollHeight(window.scrollY);
    }

    return (
        <>
            <Container id="navbar" >
                <LogoWrapper href=""><Logo src={KMLogo} /></LogoWrapper>
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
                {width >= 925 &&
                    <Wrapper navOpen={navOpen} ref={wrapperRef} >
                        <NavbarMenu isForMobile={false} handleToggle={handleToggle} />
                    </Wrapper>
                }
            </Container>
            {width < 925 &&
                <Wrapper navOpen={navOpen} ref={wrapperRef} >
                    <NavbarMenu isForMobile={true}  handleToggle={handleToggle} />
                </Wrapper>
            }
        </>
    );
}

export default Navbar;

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    transition: all 300ms ease;
    backdrop-filter: blur(8px);
    background-color: #13262FB3;
    box-shadow: 0 1px 20px 1px darkgray;
    max-height: 100px;
`;

const LogoWrapper = styled.a`
    &:link::after,
    &:visited::after,
    &:link:hover::after, 
    &:link:focus::after,
    &:visited:hover::after,
    &:visited:hover::after {
        all: initial;
        border-radius:50%;
        cursor: pointer;
    }
`
const Logo = styled.img`
    height: 60px;
    border-radius: 100px;
    transform: scale(1);
    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 20px 20px rgb(255 255 255 / 20%);
    }

`

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
    z-index: 1;
    @media screen and (max-width: 925px) {
        position: fixed;
        right: 0;
        top:0;
        transition: all 300ms ease;
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
  }
`