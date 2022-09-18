import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const NavbarMenuItem: FC<IProps> = (props) => {
  return (
    <Wrapper id={props.id} onClick={props.onClick}>
      {/* <Number>{props.id}</Number> */}
      <Slashes>//</Slashes>
      <Text>{props.text}</Text>
    </Wrapper>
  );
}

export default NavbarMenuItem;

const Wrapper = styled.button`
  overflow: visible;
  opacity: 0;
  animation: fade-from-top 1s forwards calc((${props => props.id} - 1) * 300ms);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  border: 0;
  background-color: transparent;
  &:hover > a {
    color: orange;
  }
  &:hover {
    background-color: transparent;
    transition: none;
  }

  @media screen and (max-width: 1000px) {
    animation: fade-from-right 1s forwards calc((${props => props.id} - 1) * 300ms);
    padding: 20px 0;
    justify-content: left;
  }
`

// const Number = styled.a`
// color: orange;
// font-size: 22px;
// `

const Slashes = styled.a`
  color: orange;
  font-size: 32px;
  font-weight: 400;
  padding: 0 4px;
`

const Text = styled.a``