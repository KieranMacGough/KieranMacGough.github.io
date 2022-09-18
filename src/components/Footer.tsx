import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import me from '../images/me.jpg';


function Footer() {
    return (
        <Container>
            <p>Made by Kieran MacGough</p>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    margin: auto;
    padding: 0;
    max-width: 800px;
    margin-bottom: 20px;
    text-align: center;
`