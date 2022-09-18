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



const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.p`
    font-size: 24px;
    margin: 10px 0 20px 0;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 400px;
    min-width: 340px;
    height: 475px;
    padding: 20px;
    margin: 20px;
    border: solid 1px orange;
    border-radius: 10px;
    transform: scale(1);
    transition: 0.15s all ease;
    &:hover {
        transform: scale(1.1);
        border: 2px solid #ddd;
        box-shadow: 0 0 20px 20px rgb(0 0 0 / 20%);
        cursor: pointer;
    }
    &:hover ${Title} {
        color: orange;
        text-shadow: 0 0 20px rgb(0 0 0 / 100%);
    }

    * {
    -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
    }

`

const Image = styled.img`
    max-width: 95%;
    max-height: 205px;
    border: solid 1px orange;
    border-radius: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 925px) {

  }
`

const Description = styled.p``

const Tech = styled.a`
    margin-bottom: 20px;
`