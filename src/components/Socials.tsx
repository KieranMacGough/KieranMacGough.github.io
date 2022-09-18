import React, { FC } from 'react';
import styled from 'styled-components';
import LinkedInLogo from '../images/LinkedIn.png';

interface props {
}

const Socials:FC<props> = (props) => {
  return (
    <>
        {/* <GitHub src={GitHubLogo} /> */}
        <LinkedIn src={LinkedInLogo} />
    </>
  );
}

export default Socials;

const LinkedIn = styled.img`
  width: 40px;
`