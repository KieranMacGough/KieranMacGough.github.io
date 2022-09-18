import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import me from '../images/me.jpg';


function Contact() {
    return (
        <Container id="contact">
            <SectionTitle short="Contact" title="Get In Touch!" />
            <SectionContent>
                <p>Lorem ipsum dolor sit amet. Sit obcaecati dolorem et vero tempora sed doloremque quaerat quo maiores rerum cum blanditiis blanditiis. Qui rerum delectus aut provident molestiae eos enim soluta non sint obcaecati ut dolorem sunt et nostrum reprehenderit ea maxime quis. Eos suscipit laborum  vitae error ut magnam quam et esse quibusdam et eius voluptatem. Ut magnam dolores aut earum eligendi et nesciunt laudantium est voluptas exercitationem ut blanditiis ipsam? </p><p>Sed suscipit minus id impedit corrupti et culpa soluta non modi voluptatum in commodi iusto sed explicabo consectetur aut amet atque. Et voluptatem numquam aut neque tempore quo atque reprehenderit ea corrupti amet. Sed voluptatem voluptas sit consectetur voluptates qui neque quia quo officia galisum. Dolorem illum qui dolores nemo et tenetur expedita est natus voluptatum et excepturi quia et molestiae quia et saepe quia. </p><p>Et veritatis earum qui nostrum molestias nam illo sunt a assumenda voluptatem et sequi accusamus in possimus fuga et eligendi corporis. Sit repudiandae quibusdam ea corporis minima et enim veniam est error itaque in dolores ullam et internos corporis. Sit blanditiis natus est consequuntur magni et quam quos qui obcaecati dolor quo sint quia. </p>
            </SectionContent>
        </Container>
    )
}

export default Contact;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 800px;
    margin-bottom: 400px;
    @media screen and (max-width: 925px) {
    margin-bottom: 250px;
  }
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
