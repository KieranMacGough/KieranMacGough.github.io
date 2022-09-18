import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface IContainer {
    height: number;
}
function SectionIntro() {
    const { height, width } = useWindowDimensions();
    console.log(height);
    return (
        <Container>
            <Content height={height-110}>
            <Hello>Hi, my name is</Hello>
            <Name>Kieran MacGough.</Name>
            <Headline>I like to code.</Headline>
            <Wrapper>
                <Slashes>//</Slashes>
                <Blurb>I am a front-end developer, specialising in React and looking for my first role as a developer.</Blurb>
            </Wrapper>
            </Content>
        </Container>
    )
}

export default SectionIntro;

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
    animation-delay: 2s;
`

const Name = styled.p`
    color: white;
    font-weight: 700;
    font-size: 80px;
    animation-delay: 2.3s;
`

const Headline = styled.p`
    font-weight: 300;
    font-size: 100px;
    animation-delay: 2.6s
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    animation-delay: 2.9s
`
const Slashes = styled.a`
  color: orange;
  font-size: 35px;
  font-weight: 400;
  padding: 0 8px 0 0;
`

const Blurb = styled.a`
  font-size: 18px;
  font-weight: 400;
`