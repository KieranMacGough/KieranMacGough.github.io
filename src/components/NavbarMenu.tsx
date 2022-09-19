import styled from 'styled-components';
import NavbarMenuItem from './NavbarMenuItem';
import resume from '../files/KieranMacGoughCV.pdf';

function NavbarMenu(props: any) {
  function handleClick(name: string, isForMobile:boolean) {
    const anchor = document.querySelector(name) as HTMLDivElement;
    anchor.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    console.log(isForMobile);
    if (isForMobile) {
      props.handleToggle();
    }
  }

  const PDFDownload = () => {
    fetch(resume).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Kieran MacGough Resume.pdf';
        alink.click();
      })
    })

  }
  return (
    <MenuItems >
      <NavbarMenuItem id='1' text="About Me" onClick={() => { handleClick('#aboutme', props.isForMobile) }} />
      <NavbarMenuItem id="2" text="Projects" onClick={() => { handleClick('#projects', props.isForMobile) }} />
      <NavbarMenuItem id="3" text="Experience" onClick={() => { handleClick('#experience', props.isForMobile) }} />
      <NavbarMenuItem id="4" text="Contact" onClick={() => { handleClick('#contact', props.isForMobile) }} />
      <Button id="5" onClick={PDFDownload}>Resume</Button>
    </MenuItems>
  );
}

export default NavbarMenu;

const MenuItems = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 925px) {
    flex-direction: column;
    align-items: left;
    justify-content: left;
  }
`

const Button = styled.button`
    height: 45px;
    width: 120px;
    padding: 0 10px;
    margin: 0 0 0 20px;
    opacity: 0;
    position: relative;
    animation: fade-from-top 1s forwards calc((${props => props.id} - 1) * 300ms);
    justify-content: left;

    @media screen and (max-width: 925px) {
      margin: 20px 0 0 0;
     animation: fade-from-right 1s forwards calc((${props => props.id} - 1) * 300ms);
    }
`;