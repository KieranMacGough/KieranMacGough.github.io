import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import me from '../images/me.jpg';


function SectionExperience() {
    return (
        <Container id="experience">
            <SectionTitle title="Places I've Worked" />
            <SectionContent>
                
            </SectionContent>
        </Container>
    )
}

export default SectionExperience;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 800px;
    margin-bottom: 400px;
`

const SectionContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Text = styled.p`
    margin-right: 30px;
`

const BulletList = styled.ul`
    list-style-type: square;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style-position: inside;
    max-width: 400px;
`

const ListItem = styled.li`

`

const Image = styled.img`
    border: 3px solid orange;
      border-radius: 20%;
      max-width: 300px;
      align-self: flex-start;
`
