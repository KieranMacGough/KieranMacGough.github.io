import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import image from '../images/LinkedIn.png';
import { FC } from 'react';

interface props {
    key:number;
    project: any
}

const ProjectTile:FC<props> = (props) => {
    const LanguagesList = (() => {
        return <>▪
        {
            props.project.languages.map(function(language:string, i:number){
                return <> {language} ▪</>
        })
        }</>
    })
    
    return (
        <Container id="experience">
            <SectionContent>
                <Title>{props.project.name}</Title>
                <Image src={require('../images/'+props.project.imgName)} />
                <Tech><LanguagesList /></Tech>
                <Description>{props.project.description}</Description>
            </SectionContent>
        </Container>
    )
}

export default ProjectTile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 800px;
    padding: 20px;
    margin: 20px;
    height: 500px;
    border: solid 1px orange;
    border-radius: 10px;
`

const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.p`
    font-size: 24px;
    margin: 20px 0 40px 0;
`
const Image = styled.img`
    max-width: 320px;
    max-height: 200px;
    border: solid 1px orange;
    border-radius: 10px;
    margin-bottom: 20px;
`

const Description = styled.p``

const Tech = styled.a`
    margin-bottom: 20px;
`