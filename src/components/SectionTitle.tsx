import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
}

const SectionTitle: FC<IProps> = (props) => {
    return (
        <Container>
            <Slashes>//</Slashes>
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

const Title = styled.a`
  color: white;
    font-size: 60px;
  font-weight: 400;
`