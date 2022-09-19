import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../files/projects';
import ProjectTile from './ProjectTile';

const ProjectTiles = (() => {
    return <>
    {
        projects.map(function(project, i){
            return <ProjectTile project={project} key={i} />
    })
    }</>
})


function SectionProjects() {   
    return (
        <Container id="projects">
            { }
            <SectionTitle short="Projects" title="Projects I've Worked On" />
            <SectionContent>
                <ProjectTiles />
            </SectionContent>
        </Container>
    )
}

export default SectionProjects;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 800px;
    margin-bottom: 300px;
    @media screen and (max-width: 925px) {
    margin-bottom: 250px;
  }
`

const SectionContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 925px) {
    flex-direction: column;
  }


`