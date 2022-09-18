import { FC, useState } from 'react';
import styled from 'styled-components';
import NavbarMenu from './NavbarMenu';


interface Iprops {
}

interface IWrapper {
    navOpen: boolean;
}

function Navbar() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setNavOpen(prev => !prev);
    };
    return (
        <>
            <Container>
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
`;

const Logo = styled.img``

const Hamburger = styled.button`
  // removes default border on button element
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    
  }
`

const Wrapper = styled.div<IWrapper>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    @media screen and (max-width: 1000px) {
        position: absolute;
        right: 0;
        bottom: 0;
        display: ${props => props.navOpen ? 'flex' : 'none' };
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        // makes menu span full height and width
        width: 100%;
        height: calc(100vh - 100px);
        backdrop-filter: blur(1px);
  }
`