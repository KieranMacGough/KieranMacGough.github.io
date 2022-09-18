import React, { FC } from 'react';
import styled from 'styled-components';
import LinkedInSVG from '../images/linkedin.svg';
import GitHubSVG from '../images/github.svg';
import YouTubeSVG from '../images/youtube.svg';

interface props {
}
interface Icon {
  src: string;
  href: string;
}

function Socials() {
  return (
    <Container>
        <Wrapper href="https://github.com/KieranMacGough"><Icon src={GitHubSVG} /></Wrapper>
        <Wrapper href="https://www.linkedin.com/in/kieran-macgough/"><Icon src={LinkedInSVG} /></Wrapper>
        <Wrapper href="https://www.youtube.com/channel/UCek9LJ9JOJGMGIgimgIoH_w"><Icon src={YouTubeSVG} /></Wrapper>
    </Container>
  );
}

export default Socials;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 60px 35px 60px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1060px) {
    margin: 0 60px 35px 10px;
}
  @media screen and (max-width: 925px) {
    position: unset;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 40px 0px 40px;
}
`

const Icon = styled.img`
  width: 40px;
  margin-bottom: 20px;
  transform: scale(1);
  transition: 0.15s all ease;
  filter: invert(100%) sepia(1%) saturate(34%) hue-rotate(215deg) brightness(103%) contrast(60%); // grey
  &:hover {
    filter: none; // grey
    transform: scale(1.3);
    box-shadow: 0 0 20px 20px rgb(0 0 0 / 20%);
    cursor: pointer;
  }
  @media screen and (max-width: 925px) {
    margin: 20px 30px;
}`

const Wrapper = styled.a`
    font-size: 16px;
    font-weight: 600;
    &:link, &:visited {
        display: inline-block;
        position: relative;
        padding: 0.2em 0;
        text-decoration: none;
    }
    &:link::after,
    &:visited::after,
    &:link:hover::after, 
    &:link:focus::after,
    &:visited:hover::after,
    &:visited:hover::after {
        opacity: 0;
    } 
`