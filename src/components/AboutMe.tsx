import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import me from '../images/me.jpg';


function AboutMe() {
    return (
        <Container id="aboutme">
            <SectionTitle title="About Me" />
            <SectionContent>
                <div>
                    <Text>Hello! My name is Kieran and I love developing for the web. My focus is on frontend development, but would love to learn full stack. My first taste of coding was back in 2013 after developing a mod for Amnesia: The Dark Descent, <a href="https://www.moddb.com/mods/the-four-horsemen" rel="noreferrer" target="_blank">The Four Horsemen</a>, using AngelScript. Since then, I have done small amounts of coding here and there, but only recently made the decision to change careers into a developer role. <br /><br />
                        Starting in 2022, I have been working on completing the free CS50X Web course, from Harvard, as well as working on some projects to gain experience using modern frameworks and the development process. <br /><br />
                        The main technologies I have been working with are:<br /><br /></Text>
                    <BulletList>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Git/GitHub</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>React Native</ListItem>
                    </BulletList>
                </div>
                <Image src={me} />
            </SectionContent>
        </Container>
    )
}

export default AboutMe;

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
const Text = styled.p`
    margin-right: 30px;
    @media screen and (max-width: 925px) {
    margin-right: 0px;
    }
`

const BulletList = styled.ul`
    list-style-type: square;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style-position: inside;
    max-width: 400px;
    @media screen and (max-width: 925px) {
    margin-bottom: 20px;
  }
`

const ListItem = styled.li`

`

const Image = styled.img`
    border: 3px solid orange;
      border-radius: 20%;
      max-width: 300px;
      align-self: flex-start;
      @media screen and (max-width: 925px) {
        align-self: center;
  }
`
