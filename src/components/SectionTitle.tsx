import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
    short?: string;
}

const SectionTitle: FC<IProps> = (props) => {
    let shortTitle = ''
    
    if (props.short) {
        shortTitle = props.short
    } else {
        shortTitle = props.title
    }

    return (
        <Container>
            <Slashes>//</Slashes>
            {props.short != ''
            ? <ShortTitle>{shortTitle}</ShortTitle>
            : <Title>{props.title}</Title>
            }
            <Title>{props.title}</Title>
        </Container>
    )
}

export default SectionTitle;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Slashes = styled.a`
  color: orange;
  font-size: 70px;
  font-weight: 400;
  padding: 0 8px 0 0;
`

const ShortTitle = styled.a`
    color: white;
  font-size: 60px;
  font-weight: 400;
  display:none;
  @media screen and (max-width: 925px) {
    display: inline-block;
  }
`

const Title = styled.a`
  color: white;
  font-size: 60px;
  font-weight: 400;
  display: inline-block;
  @media screen and (max-width: 925px) {
    display: none;
}
`