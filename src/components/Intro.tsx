import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface IContainer {
    height: number;
}

function Intro() {
    const { height } = useWindowDimensions();
    console.log(height);
    return (
        <Container>
            <Content height={height}>
            <Hello>Hi, my name is</Hello>
            <Name>Kieran MacGough.<br /></Name>
            <Headline>I like to code.</Headline>
            <Wrapper>
                <Slashes>//</Slashes>
                <Blurb>I am a front-end developer, specialising in React. Welcome to my website.</Blurb>
            </Wrapper>
            </Content>
        </Container>
    )
}

export default Intro;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    max-width: 1000px;
`

const Content = styled.div<IContainer>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: ${props => props.height }px;
    padding-bottom: 200px;
    
    * {
        position: relative;
        opacity: 0;
        animation: fade-from-bottom 1s forwards;
    }
`

const Hello = styled.p`
    color: orange;
    font-weight: 200;
    font-size: 50px;
    animation-delay: 0s;
    @media screen and (max-width: 925px) {
    font-size: 25px;
  }
`

const Name = styled.p`
    color: white;
    font-weight: 700;
    font-size: 80px;
    animation-delay: 0.4s;
    @media screen and (max-width: 925px) {
    font-size: 40px;
  }
`

const Headline = styled.p`
    font-weight: 300;
    font-size: 100px;
    animation-delay: 0.8s;
    @media screen and (max-width: 925px) {
    font-size: 50px;
  }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    animation-delay: 1.2s;
    @media screen and (max-width: 925px) {
  }
`
const Slashes = styled.a`
  color: orange;
  font-size: 36px;
  font-weight: 400;
  padding: 0 8px 0 0;
  @media screen and (max-width: 925px) {
    font-size: 18px;
  }
`

const Blurb = styled.a`
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 925px) {
    font-size: 9px;
  }
`